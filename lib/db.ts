import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Database utility functions
export async function getEquipmentById(id: string) {
  return await prisma.equipment.findUnique({
    where: { id },
    include: {
      host: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            }
          }
        }
      },
      reviews: {
        include: {
          user: {
            select: {
              name: true,
              image: true,
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      },
      bookings: {
        where: {
          status: {
            in: ['CONFIRMED', 'ACTIVE', 'COMPLETED']
          }
        },
        select: {
          startDate: true,
          endDate: true,
          status: true,
        }
      },
      unavailableDates: {
        where: {
          endDate: {
            gte: new Date()
          }
        }
      },
      _count: {
        select: {
          reviews: true,
          bookings: true,
        }
      }
    }
  })
}

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    include: {
      hostProfile: true,
      bookings: {
        include: {
          equipment: {
            select: {
              id: true,
              title: true,
              brand: true,
              model: true,
              images: true,
              type: true,
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      },
      favorites: {
        include: {
          equipment: {
            select: {
              id: true,
              title: true,
              brand: true,
              model: true,
              images: true,
              type: true,
              dailyRate: true,
              city: true,
              state: true,
            }
          }
        }
      }
    }
  })
}

export async function getHostProfile(userId: string) {
  return await prisma.hostProfile.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        }
      },
      equipment: {
        include: {
          _count: {
            select: {
              bookings: true,
              reviews: true,
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  })
}

export async function createHostProfile(userId: string, data: {
  businessName?: string
  description?: string
}) {
  // First update the user to mark them as a host
  await prisma.user.update({
    where: { id: userId },
    data: { isHost: true }
  })

  // Then create the host profile
  return await prisma.hostProfile.create({
    data: {
      userId,
      ...data,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        }
      }
    }
  })
}

export async function searchEquipment(params: {
  type?: string
  location?: string
  startDate?: string
  endDate?: string
  minPrice?: number
  maxPrice?: number
  sortBy?: string
  page?: number
  limit?: number
}) {
  const {
    type,
    location,
    startDate,
    endDate,
    minPrice,
    maxPrice,
    sortBy = 'createdAt',
    page = 1,
    limit = 12
  } = params

  const where: any = {
    status: 'ACTIVE',
    available: true,
  }

  // Filter by equipment type
  if (type && type !== 'ALL') {
    where.type = type
  }

  // Filter by location
  if (location) {
    where.OR = [
      { city: { contains: location, mode: 'insensitive' } },
      { state: { contains: location, mode: 'insensitive' } },
      { address: { contains: location, mode: 'insensitive' } },
    ]
  }

  // Filter by price range
  if (minPrice || maxPrice) {
    where.dailyRate = {}
    if (minPrice) where.dailyRate.gte = minPrice
    if (maxPrice) where.dailyRate.lte = maxPrice
  }

  // Filter by availability dates
  if (startDate && endDate) {
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    // Exclude equipment that has bookings or unavailable dates overlapping with requested dates
    where.AND = [
      {
        bookings: {
          none: {
            AND: [
              { startDate: { lte: end } },
              { endDate: { gte: start } },
              { status: { in: ['CONFIRMED', 'ACTIVE'] } }
            ]
          }
        }
      },
      {
        unavailableDates: {
          none: {
            AND: [
              { startDate: { lte: end } },
              { endDate: { gte: start } }
            ]
          }
        }
      }
    ]
  }

  // Build order by clause
  let orderBy: any = { createdAt: 'desc' }
  
  switch (sortBy) {
    case 'price_low':
      orderBy = { dailyRate: 'asc' }
      break
    case 'price_high':
      orderBy = { dailyRate: 'desc' }
      break
    case 'rating':
      // This is complex with Prisma, would need raw query or computed field
      orderBy = { createdAt: 'desc' }
      break
    case 'newest':
      orderBy = { createdAt: 'desc' }
      break
  }

  const skip = (page - 1) * limit

  const [equipment, total] = await Promise.all([
    prisma.equipment.findMany({
      where,
      orderBy,
      skip,
      take: limit,
      include: {
        host: {
          include: {
            user: {
              select: {
                name: true,
                image: true,
              }
            }
          }
        },
        reviews: {
          select: {
            rating: true,
          }
        },
        _count: {
          select: {
            reviews: true,
            bookings: true,
          }
        }
      }
    }),
    prisma.equipment.count({ where })
  ])

  return {
    equipment,
    total,
    page,
    limit,
    hasMore: skip + limit < total,
  }
}

export async function isEquipmentAvailable(
  equipmentId: string,
  startDate: Date,
  endDate: Date
): Promise<boolean> {
  // Check for overlapping bookings
  const overlappingBookings = await prisma.booking.count({
    where: {
      equipmentId,
      status: { in: ['CONFIRMED', 'ACTIVE'] },
      AND: [
        { startDate: { lte: endDate } },
        { endDate: { gte: startDate } }
      ]
    }
  })

  if (overlappingBookings > 0) return false

  // Check for unavailable dates
  const unavailableDates = await prisma.unavailableDate.count({
    where: {
      equipmentId,
      AND: [
        { startDate: { lte: endDate } },
        { endDate: { gte: startDate } }
      ]
    }
  })

  return unavailableDates === 0
}

export async function calculateBookingPrice(
  equipmentId: string,
  startDate: Date,
  endDate: Date
) {
  const equipment = await prisma.equipment.findUnique({
    where: { id: equipmentId },
    select: {
      dailyRate: true,
      weeklyRate: true,
      monthlyRate: true,
      securityDeposit: true,
    }
  })

  if (!equipment) throw new Error('Equipment not found')

  const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  
  let subtotal = 0
  
  // Calculate best rate (daily, weekly, or monthly)
  if (equipment.monthlyRate && days >= 30) {
    const months = Math.floor(days / 30)
    const remainingDays = days % 30
    subtotal = (months * equipment.monthlyRate) + (remainingDays * equipment.dailyRate)
  } else if (equipment.weeklyRate && days >= 7) {
    const weeks = Math.floor(days / 7)
    const remainingDays = days % 7
    subtotal = (weeks * equipment.weeklyRate) + (remainingDays * equipment.dailyRate)
  } else {
    subtotal = days * equipment.dailyRate
  }

  const serviceFee = Math.round(subtotal * 0.1) // 10% service fee
  const tax = Math.round((subtotal + serviceFee) * 0.08) // 8% tax
  const totalAmount = subtotal + serviceFee + tax

  return {
    dailyRate: equipment.dailyRate,
    totalDays: days,
    subtotal,
    serviceFee,
    tax,
    securityDeposit: equipment.securityDeposit || 0,
    totalAmount,
    breakdown: [
      { label: `${days} day${days > 1 ? 's' : ''} rental`, amount: subtotal },
      { label: 'Service fee', amount: serviceFee },
      { label: 'Tax', amount: tax },
    ]
  }
}

