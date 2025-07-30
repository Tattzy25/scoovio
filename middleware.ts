import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextpathname
  
  // Protected routes that require authentication
  const protectedRoutes = [
    '/dashboard',
    '/checkout',
    '/host/dashboard',
    '/host/cars/new'
  ]
  
  const isProtectedRoute = protectedRoutes.some(route => 
    path.startsWith(route)
  )
  
  // Mock authentication check - replace with real auth
  const isAuthenticated = request.cookies.get('auth-token')
  
  if (isProtectedRoute && !isAuthenticated) {
    const url = new URL('/login', request.url)
    url.searchParams.set('callbackUrl', path)
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/checkout/:path*',
    '/host/:path*'
  ]
}