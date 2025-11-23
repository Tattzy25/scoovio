import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { PrismaClient, EquipmentType } from '@prisma/client'
import { equipmentSearchSchema, equipmentSchema } from '@/lib/validations/equipment'
import { getEquipmentConfig } from '@/lib/equipment-types'
import { authOptions } from '@/lib/auth'

const prisma = new PrismaClient()

// GET /api/equipment - Search and filter equipment
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const params = Object.fromEntries(searchParams.entries())
    
    // Convert string parameters to appropriate types
    const searchData = {
      ...params,
      minPrice: params.minPrice ? parseFloat(params.minPrice) : undefined,
      maxPrice: params.maxPrice ? parseFloat(params.maxPrice) : undefined,
      page: params.page ? parseInt(params.page) : 1,
      limit: params.limit ? parseInt(params.limit) : 12,
      features: params.features ? params.features.split(',') : undefined,
      
      // Mobility scooter filters
      maxSpeed: params.maxSpeed ? parseFloat(params.maxSpeed) : undefined,
      range: params.range ? parseFloat(params.range) : undefined,
      maxWeight: params.maxWeight ? parseFloat(params.maxWeight) : undefined,
      foldable: params.foldable === 'true' ? true : params.foldable === 'false' ? false : undefined,
      
      // Baby stroller filters
      minAge: params.minAge ? parseInt(params.minAge) : undefined,
      maxAge: params.maxAge ? parseInt(params.maxAge) : undefined,
      seatCount: params.seatCount ? parseInt(params.seatCount) : undefined,
      carSeatCompatible: params.carSeatCompatible === 'true' ? true : params.carSeatCompatible === 'false' ? false : undefined,
    }

    // Validate search parameters
    const validatedParams = equipmentSearchSchema.parse(searchData)
    
    // Build where clause
    const where: any = {
      status: 'ACTIVE',
      available: true,
    }
    
    // Filter by equipment type
    if (validatedParams.type) {
      where.type = validatedParams.type
    }
    
    // Filter by location (city or state)
    if (validatedParams.location) {
      where.OR = [
        { city: { contains: validatedParams.location, mode: 'insensitive' } },
        { state: { contains: validatedParams.location, mode: 'insensitive' } },
        { address: { contains: validatedParams.location, mode: 'insensitive' } },
      ]
    }
    
    // Filter by price range
    if (validatedParams.minPrice || validatedParams.maxPrice) {
      where.dailyRate = {}
      if (validatedParams.minPrice) where.dailyRate.gte = validatedParams.minPrice
      if (validatedParams.maxPrice) where.dailyRate.lte = validatedParams.maxPrice
    }
    
    // Equipment-specific filters
    if (validatedParams.type === EquipmentType.MOBILITY_SCOOTER) {
      if (validatedParams.maxSpeed) {
        where.specifications = {
          ...where.specifications,
          path: ['maxSpeed'],
          gte: validatedParams.maxSpeed
        }
      }
      if (validatedParams.range) {
        where.specifications = {
          ...where.specifications,
          path: ['range'],
          gte: validatedParams.range
        }
      }
      if (validatedParams.maxWeight) {
        where.specifications = {
          ...where.specifications,
          path: ['maxWeight'],
          gte: validatedParams.maxWeight
        }
      }
      if (validatedParams.foldable !== undefined) {
        where.specifications = {
          ...where.specifications,
          path: ['foldable'],
          equals: validatedParams.foldable
        }
      }
    }
    
    if (validatedParams.type === EquipmentType.BABY_STROLLER) {
      if (validatedParams.seatCount) {
        where.specifications = {
          ...where.specifications,
          path: ['seatCount'],
          equals: validatedParams.seatCount
        }
      }
      if (validatedParams.carSeatCompatible !== undefined) {
        where.features = {
          ...where.features,
          path: ['carSeatCompatible'],
          equals: validatedParams.carSeatCompatible
        }
      }
      if (validatedParams.minAge || validatedParams.maxAge) {
        // Age range filtering for strollers
        if (validatedParams.minAge) {
          where.specifications = {
            ...where.specifications,
            path: ['ageRange', 'maxMonths'],
            gte: validatedParams.minAge
          }
        }
        if (validatedParams.maxAge) {
          where.specifications = {
            ...where.specifications,
            path: ['ageRange', 'minMonths'],
            lte: validatedParams.maxAge
          }
        }
      }
    }
    
    // Build order by clause
    let orderBy: any = { createdAt: 'desc' } // default
    
    switch (validatedParams.sortBy) {
      case 'price_low':
        orderBy = { dailyRate: 'asc' }
        break
      case 'price_high':
        orderBy = { dailyRate: 'desc' }
        break
      case 'rating':
        orderBy = { reviews: { _count: 'desc' } }
        break
      case 'newest':
        orderBy = { createdAt: 'desc' }
        break
    }
    
    // Calculate pagination
    const skip = (validatedParams.page - 1) * validatedParams.limit
    
    // Execute query
    const [equipment, total] = await Promise.all([
      prisma.equipment.findMany({
        where,
        orderBy,
        skip,
        take: validatedParams.limit,
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
    
    // Calculate aggregated data for filters
    const priceRange = await prisma.equipment.aggregate({
      where: { status: 'ACTIVE', available: true },
      _min: { dailyRate: true },
      _max: { dailyRate: true },
    })
    
    const availableFeatures = await prisma.equipment.findMany({
      where: { status: 'ACTIVE', available: true },
      select: { features: true, type: true },
      distinct: ['type']
    })
    
    const locations = await prisma.equipment.findMany({
      where: { status: 'ACTIVE', available: true },
      select: { city: true, state: true },
      distinct: ['city', 'state']
    })
    
    return NextResponse.json({
      equipment,
      total,
      page: validatedParams.page,
      limit: validatedParams.limit,
      hasMore: skip + validatedParams.limit < total,
      filters: {
        priceRange: {
          min: priceRange._min.dailyRate || 0,
          max: priceRange._max.dailyRate || 1000,
        },
        availableFeatures: availableFeatures.map(item => Object.keys(item.features as any)),
        locations: locations.map(item => `${item.city}, ${item.state}`),
      }
    })
    
  } catch (error) {
    console.error('Equipment search error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid search parameters', details: error.message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to search equipment' },
      { status: 500 }
    )
  }
}

// POST /api/equipment - Create new equipment listing
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }
    
    // Check if user is a host
    const hostProfile = await prisma.hostProfile.findUnique({
      where: { userId: session.user.id }
    })
    
    if (!hostProfile) {
      return NextResponse.json(
        { error: 'Host profile required to create listings' },
        { status: 403 }
      )
    }
    
    const body = await request.json()
    
    // Validate equipment data
    const validatedData = equipmentSchema.parse(body)
    
    // Additional validation based on equipment type
    const config = getEquipmentConfig(validatedData.type)
    
    // Create equipment listing
    const equipment = await prisma.equipment.create({
      data: {
        ...validatedData,
        hostId: hostProfile.id,
        status: 'PENDING_APPROVAL', // Requires admin approval
        specifications: validatedData.specifications,
        features: validatedData.features,
      },
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
        }
      }
    })
    
    return NextResponse.json(equipment, { status: 201 })
    
  } catch (error) {
    console.error('Equipment creation error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid equipment data', details: error.message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to create equipment listing' },
      { status: 500 }
    )
  }
}

// PUT /api/equipment - Update equipment listing
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }
    
    const body = await request.json()
    const { id, ...updateData } = body
    
    if (!id) {
      return NextResponse.json(
        { error: 'Equipment ID is required' },
        { status: 400 }
      )
    }
    
    // Check if user owns this equipment
    const existingEquipment = await prisma.equipment.findUnique({
      where: { id },
      include: {
        host: {
          select: {
            userId: true
          }
        }
      }
    })
    
    if (!existingEquipment) {
      return NextResponse.json(
        { error: 'Equipment not found' },
        { status: 404 }
      )
    }
    
    if (existingEquipment.host.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Not authorized to update this equipment' },
        { status: 403 }
      )
    }
    
    // Update equipment
    const updatedEquipment = await prisma.equipment.update({
      where: { id },
      data: updateData,
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
        }
      }
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

