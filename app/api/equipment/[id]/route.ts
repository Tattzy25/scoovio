import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'
import { authOptions } from '@/lib/auth'

const prisma = new PrismaClient()

// GET /api/equipment/[id] - Get equipment details
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    if (!id) {
      return NextResponse.json(
        { error: 'Equipment ID is required' },
        { status: 400 }
      )
    }
    
    const equipment = await prisma.equipment.findUnique({
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
    
    if (!equipment) {
      return NextResponse.json(
        { error: 'Equipment not found' },
        { status: 404 }
      )
    }
    
    // Calculate average rating
    const avgRating = equipment.reviews.length > 0
      ? equipment.reviews.reduce((sum, review) => sum + review.rating, 0) / equipment.reviews.length
      : 0
    
    // Calculate availability calendar for next 3 months
    const today = new Date()
    const threeMonthsFromNow = new Date()
    threeMonthsFromNow.setMonth(today.getMonth() + 3)
    
    const unavailableDates = [
      ...equipment.bookings.map(booking => ({
        startDate: booking.startDate,
        endDate: booking.endDate,
        reason: 'booked'
      })),
      ...equipment.unavailableDates.map(date => ({
        startDate: date.startDate,
        endDate: date.endDate,
        reason: date.reason || 'blocked'
      }))
    ]
    
    const equipmentWithStats = {
      ...equipment,
      avgRating: Math.round(avgRating * 10) / 10,
      totalTrips: equipment._count.bookings,
      unavailableDates,
    }
    
    return NextResponse.json(equipmentWithStats)
    
  } catch (error) {
    console.error('Equipment fetch error:', error)
    
    return NextResponse.json(
      { error: 'Failed to fetch equipment details' },
      { status: 500 }
    )
  }
}

// DELETE /api/equipment/[id] - Delete equipment listing
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }
    
    const { id } = params
    
    if (!id) {
      return NextResponse.json(
        { error: 'Equipment ID is required' },
        { status: 400 }
      )
    }
    
    // Check if user owns this equipment
    const equipment = await prisma.equipment.findUnique({
      where: { id },
      include: {
        host: {
          select: {
            userId: true
          }
        },
        bookings: {
          where: {
            status: {
              in: ['PENDING', 'CONFIRMED', 'ACTIVE']
            }
          }
        }
      }
    })
    
    if (!equipment) {
      return NextResponse.json(
        { error: 'Equipment not found' },
        { status: 404 }
      )
    }
    
    if (equipment.host.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Not authorized to delete this equipment' },
        { status: 403 }
      )
    }
    
    // Check for active bookings
    if (equipment.bookings.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete equipment with active bookings' },
        { status: 400 }
      )
    }
    
    // Soft delete by setting status to INACTIVE
    await prisma.equipment.update({
      where: { id },
      data: {
        status: 'INACTIVE',
        available: false,
      }
    })
    
    return NextResponse.json({ message: 'Equipment deleted successfully' })
    
  } catch (error) {
    console.error('Equipment deletion error:', error)
    
    return NextResponse.json(
      { error: 'Failed to delete equipment' },
      { status: 500 }
    )
  }
}

// PATCH /api/equipment/[id] - Update equipment availability
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }
    
    const { id } = params
    const body = await request.json()
    
    if (!id) {
      return NextResponse.json(
        { error: 'Equipment ID is required' },
        { status: 400 }
      )
    }
    
    // Check if user owns this equipment
    const equipment = await prisma.equipment.findUnique({
      where: { id },
      include: {
        host: {
          select: {
            userId: true
          }
        }
      }
    })
    
    if (!equipment) {
      return NextResponse.json(
        { error: 'Equipment not found' },
        { status: 404 }
      )
    }
    
    if (equipment.host.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Not authorized to update this equipment' },
        { status: 403 }
      )
    }
    
    // Update only allowed fields
    const allowedUpdates = ['available', 'dailyRate', 'weeklyRate', 'monthlyRate', 'securityDeposit']
    const updateData: any = {}
    
    for (const field of allowedUpdates) {
      if (body[field] !== undefined) {
        updateData[field] = body[field]
      }
    }
    
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: 'No valid fields to update' },
        { status: 400 }
      )
    }
    
    const updatedEquipment = await prisma.equipment.update({
      where: { id },
      data: updateData,
    })
    
    return NextResponse.json(updatedEquipment)
    
  } catch (error) {
    console.error('Equipment update error:', error)
    
    return NextResponse.json(
      { error: 'Failed to update equipment' },
      { status: 500 }
    )
  }
}

