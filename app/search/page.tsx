'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon, MapPinIcon, CalendarDaysIcon, StarIcon, HeartIcon, FilterIcon } from '@heroicons/react/24/outline'

interface Car {
  id: number
  make: string
  model: string
  year: number
  price: number
  rating: number
  trips: number
  image: string
  location: string
  transmission: string
  seats: number
  fuel: string
  host: {
    name: string
    rating: number
    trips: number
  }
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 500,
    transmission: 'all',
    seats: 0,
    fuel: 'all'
  })

  useEffect(() => {
    // Simulate API call with mock data
    const mockCars: Car[] = [
      {
        id: 1,
        make: 'Tesla',
        model: 'Model 3',
        year: 2023,
        price: 89,
        rating: 4.9,
        trips: 124,
        image: '/api/placeholder/400/300',
        location: 'Los Angeles, CA',
        transmission: 'Automatic',
        seats: 5,
        fuel: 'Electric',
        host: { name: 'Alex M.', rating: 4.9, trips: 200 }
      },
      {
        id: 2,
        make: 'BMW',
        model: 'X5',
        year: 2023,
        price: 129,
        rating: 4.8,
        trips: 89,
        image: '/api/placeholder/400/300',
        location: 'San Francisco, CA',
        transmission: 'Automatic',
        seats: 7,
        fuel: 'Gas',
        host: { name: 'Sarah K.', rating: 4.8, trips: 150 }
      },
      {
        id: 3,
        make: 'Honda',
        model: 'Civic',
        year: 2022,
        price: 45,
        rating: 4.7,
        trips: 256,
        image: '/api/placeholder/400/300',
        location: 'Miami, FL',
        transmission: 'Automatic',
        seats: 5,
        fuel: 'Gas',
        host: { name: 'Mike R.', rating: 4.7, trips: 300 }
      },
      {
        id: 4,
        make: 'Porsche',
        model: '911',
        year: 2023,
        price: 299,
        rating: 5.0,
        trips: 45,
        image: '/api/placeholder/400/300',
        location: 'New York, NY',
        transmission: 'Automatic',
        seats: 4,
        fuel: 'Gas',
        host: { name: 'Emma L.', rating: 5.0, trips: 100 }
      },
      {
        id: 5,
        make: 'Toyota',
        model: 'Camry',
        year: 2023,
        price: 55,
        rating: 4.6,
        trips: 178,
        image: '/api/placeholder/400/300',
        location: 'Chicago, IL',
        transmission: 'Automatic',
        seats: 5,
        fuel: 'Hybrid',
        host: { name: 'David P.', rating: 4.6, trips: 250 }
      },
      {
        id: 6,
        make: 'Jeep',
        model: 'Wrangler',
        year: 2023,
        price: 85,
        rating: 4.8,
        trips: 92,
        image: '/api/placeholder/400/300',
        location: 'Denver, CO',
        transmission: 'Manual',
        seats: 5,
        fuel: 'Gas',
        host: { name: 'Lisa T.', rating: 4.8, trips: 120 }
      }
    ]
    
    setTimeout(() => {
      setCars(mockCars)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredCars = cars.filter(car => 
    car.price >= filters.priceMin && 
    car.price <= filters.priceMax &&
    (filters.transmission === 'all' || car.transmission === filters.transmission) &&
    (filters.seats === 0 || car.seats >= filters.seats) &&
    (filters.fuel === 'all' || car.fuel === filters.fuel)
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {searchParams.get('location') || 'All locations'}
              </h1>
              <p className="text-sm text-gray-600">
                {searchParams.get('start') && searchParams.get('end') 
                  ? `${searchParams.get('start')} - ${searchParams.get('end')}`
                  : 'Any dates'
                }
              </p>
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FilterIcon className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price per day</label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({...filters, priceMax: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${filters.priceMin}</span>
                    <span>${filters.priceMax}+</span>
                  </div>
                </div>
              </div>

              {/* Transmission */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                <select
                  value={filters.transmission}
                  onChange={(e) => setFilters({...filters, transmission: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="all">All</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>

              {/* Seats */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Seats</label>
                <select
                  value={filters.seats}
                  onChange={(e) => setFilters({...filters, seats: parseInt(e.target.value)})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="0">Any</option>
                  <option value="2">2+ seats</option>
                  <option value="4">4+ seats</option>
                  <option value="5">5+ seats</option>
                  <option value="7">7+ seats</option>
                </select>
              </div>

              {/* Fuel Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel type</label>
                <select
                  value={filters.fuel}
                  onChange={(e) => setFilters({...filters, fuel: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="all">All</option>
                  <option value="Gas">Gas</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </div>

          {/* Car Listings */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow animate-pulse">
                    <div className="h-48 bg-gray-300 rounded-t-lg"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
                      <div className="flex justify-between">
                        <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    {filteredCars.length} cars available
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCars.map((car) => (
                    <Link key={car.id} href={`/car/${car.id}`}>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <Image
                            src={car.image}
                            alt={`${car.make} ${car.model}`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                          />
                          <button 
                            onClick={(e) => e.preventDefault()}
                            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                          >
                            <HeartIcon className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {car.year} {car.make} {car.model}
                              </h3>
                              <p className="text-sm text-gray-600">{car.location}</p>
                              <p className="text-sm text-gray-500">
                                {car.transmission} • {car.seats} seats • {car.fuel}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Hosted by {car.host.name}</p>
                              <div className="flex items-center mt-1">
                                <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="ml-1 text-sm text-gray-600">
                                  {car.rating} ({car.trips} trips)
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                              <span className="text-sm text-gray-600">/day</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}