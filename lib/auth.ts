import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.password) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          isHost: user.isHost,
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isHost = user.isHost
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.isHost = token.isHost as boolean
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
    signUp: '/signup',
  }
}

// Helper functions for authentication
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}

export async function createUser(data: {
  email: string
  password: string
  name?: string
}) {
  const hashedPassword = await hashPassword(data.password)
  
  return await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    }
  })
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
    include: {
      hostProfile: true,
    }
  })
}

export async function updateUserProfile(userId: string, data: {
  name?: string
  phone?: string
  dateOfBirth?: Date
  image?: string
}) {
  return await prisma.user.update({
    where: { id: userId },
    data,
  })
}

// Type augmentation for NextAuth
declare module 'next-auth' {
  interface User {
    isHost?: boolean
  }
  
  interface Session {
    user: {
      id: string
      email: string
      name?: string
      image?: string
      isHost?: boolean
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isHost?: boolean
  }
}

