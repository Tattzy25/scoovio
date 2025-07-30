import { NextRequest, NextResponse } from 'next/server'

interface Car {
  id: string
  make: string
  model: string
  year: number
  price: number
  location: string
  images: string[]
  features: {
    seats: number
    transmission: string
    fuel: string
    doors: number
  }
  host: {
    name: string
    rating: number
    trips: number
  }
  rating: number
  reviews: number
}

const mockCars: Car[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 89,
    location: 'San Francisco, CA',
    images: ['/api/placeholder/300/200'],
    features: {
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Electric',
      doors: 4
    },
    host: {
      name: 'Alex Chen',
      rating: 4.9,
      trips: 312
    },
    rating: 4.9,
    reviews: 127
  },
  {
    id: '2',
    make: 'BMW',
    model: 'X5',
    year: 2022,
    price: 120,
    location: 'Los Angeles, CA',
    images: ['/api/placeholder/300/200'],
    features: {
      seats: 7,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      doors: 4
    },
    host: {
      name: 'Sarah Miller',
      rating: 4.8,
      trips: 156
    },
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    price: 45,
    location: 'New York, NY',
    images: ['/api/placeholder/300/200'],
    features: {
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      doors: 4
    },
    host: {
      name: 'Mike Johnson',
      rating: 4.7,
      trips: 89
    },
    rating: 4.7,
    reviews: 65
  }
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const location = searchParams.get('location')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  const transmission = searchParams.get('transmission')
  const seats = searchParams.get('seats')
  const fuel = searchParams.get('fuel')

  let filteredCars = mockCars

  if (location) {
    filteredCars = filteredCars.filter(car => 
      car.location.toLowerCase().includes(location.toLowerCase())
    )
  }

  if (minPrice) {
    filteredCars = filteredCars.filter(car => car.price >= parseInt(minPrice))
  }

  if (maxPrice) {
    filteredCars = filteredCars.filter(car => car.price <= parseInt(maxPrice))
  }

  if (transmission) {
    filteredCars = filteredCars.filter(car => car.features.transmission === transmission)
  }

  if (seats) {
    filteredCars = filteredCars.filter(car => car.features.seats >= parseInt(seats))
  }

  if (fuel) {
    filteredCars = filteredCars.filter(car => car.features.fuel === fuel)
  }

  return NextResponse.json({ cars: filteredCars })
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

    // Create new car (mock)
    const newCar: Car = {
      id: Date.now().toString(),
      make,
      model,
      year,
      price,
      location,
      images: ['/api/placeholder/300/200'],
      features: {
        seats: features.seats || 5,
        transmission: features.transmission || 'Automatic',
        fuel: features.fuel || 'Gasoline',
        doors: features.doors || 4
      },
      host: {
        name: 'Current User',
        rating: 5.0,
        trips: 0
      },
      rating: 0,
      reviews: 0
    }

    return NextResponse.json({ car: newCar }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}