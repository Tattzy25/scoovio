import { NextRequest, NextResponse } from 'next/server'

interface Booking {
  id: string
  userId: string
  carId: string
  startDate: string
  endDate: string
  pickupLocation: string
  total: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  car: {
    make: string
    model: string
    year: number
    image: string
  }
  host: {
    name: string
    avatar: string
  }
}

const mockBookings: Booking[] = [
  {
    id: '1',
    userId: '1',
    carId: '1',
    startDate: '2024-01-20',
    endDate: '2024-01-25',
    pickupLocation: 'San Francisco, CA',
    total: 445,
    status: 'confirmed',
    car: {
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      image: '/api/placeholder/300/200'
    },
    host: {
      name: 'Alex Chen',
      avatar: '/api/placeholder/48/48'
    }
  },
  {
    id: '2',
    userId: '1',
    carId: '2',
    startDate: '2024-01-15',
    endDate: '2024-01-18',
    pickupLocation: 'Los Angeles, CA',
    total: 360,
    status: 'completed',
    car: {
      make: 'BMW',
      model: 'X5',
      year: 2022,
      image: '/api/placeholder/300/200'
    },
    host: {
      name: 'Sarah Miller',
      avatar: '/api/placeholder/48/48'
    }
  }
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userId = searchParams.get('userId')
  const status = searchParams.get('status')

  let filteredBookings = mockBookings

  if (userId) {
    filteredBookings = filteredBookings.filter(booking => booking.userId === userId)
  }

  if (status) {
    filteredBookings = filteredBookings.filter(booking => booking.status === status)
  }

  return NextResponse.json({ bookings: filteredBookings })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, carId, startDate, endDate, pickupLocation, total, extras } = body

    // Validate required fields
    if (!userId || !carId || !startDate || !endDate || !pickupLocation || !total) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create new booking (mock)
    const newBooking: Booking = {
      id: Date.now().toString(),
      userId,
      carId,
      startDate,
      endDate,
      pickupLocation,
      total,
      status: 'confirmed',
      car: {
        make: 'Tesla',
        model: 'Model 3',
        year: 2023,
        image: '/api/placeholder/300/200'
      },
      host: {
        name: 'Alex Chen',
        avatar: '/api/placeholder/48/48'
      }
    }

    return NextResponse.json({ booking: newBooking }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}