import { NextRequest, NextResponse } from 'next/server'
import { scooters, Scooter } from '@/data/scooters'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const location = searchParams.get('location')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  const transmission = searchParams.get('transmission')
  const seats = searchParams.get('seats')
  const fuel = searchParams.get('fuel')

  let filteredScooters = scooters

  if (location) {
    filteredScooters = filteredScooters.filter(scooter => 
      scooter.location.toLowerCase().includes(location.toLowerCase())
    )
  }

  if (minPrice) {
    filteredScooters = filteredScooters.filter(scooter => scooter.price >= parseInt(minPrice))
  }

  if (maxPrice) {
    filteredScooters = filteredScooters.filter(scooter => scooter.price <= parseInt(maxPrice))
  }

  if (transmission) {
    filteredScooters = filteredScooters.filter(scooter => scooter.features.transmission === transmission)
  }

  if (seats) {
    filteredScooters = filteredScooters.filter(scooter => scooter.features.seats >= parseInt(seats))
  }

  if (fuel) {
    filteredScooters = filteredScooters.filter(scooter => scooter.features.fuel === fuel)
  }

  return NextResponse.json({ scooters: filteredScooters })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { make, model, year, price, location, features } = body

    // Validate required fields
    if (!make || !model || !year || !price || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create new scooter (mock)
    const newScooter: Scooter = {
      id: Date.now().toString(),
      make,
      model,
      year,
      price,
      location,
      images: ['/api/placeholder/300/200'],
      features: {
        seats: features?.seats || 1,
        transmission: features?.transmission || 'Automatic',
        fuel: features?.fuel || 'Gasoline',
        weightCapacity: features?.weightCapacity || 300,
        batteryType: features?.batteryType || 'Lithium-Ion',
        range: features?.range || 40,
        category: features?.category || 'Standard'
      },
      host: {
        name: 'Current User',
        avatar: '/api/placeholder/48/48',
        rating: 5.0,
        trips: 0
      },
      rating: 0,
      reviews: 0,
      trips: 0,
      description: '',
      guidelines: [],
      extras: []
    }

    return NextResponse.json({ scooter: newScooter }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}