'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon, MapPinIcon, CalendarDaysIcon, StarIcon, HeartIcon, FunnelIcon } from '@heroicons/react/24/outline'
import type { Scooter } from '@/data/scooters'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [scooters, setScooters] = useState<Scooter[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 500,
    transmission: 'all',
    seats: 0,
    fuel: 'all'
  })

  useEffect(() => {
    const location = searchParams.get('location') || ''
    const params = new URLSearchParams()
    if (location) params.set('location', location)

    setLoading(true)
    fetch(`/api/scooters?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setScooters(data.scooters)
        setLoading(false)
      })
  }, [searchParams])

  const filteredScooters = scooters.filter(scooter =>
    scooter.price >= filters.priceMin &&
    scooter.price <= filters.priceMax &&
    (filters.transmission === 'all' || scooter.features.transmission === filters.transmission) &&
    (filters.seats === 0 || scooter.features.seats >= filters.seats) &&
    (filters.fuel === 'all' || scooter.features.fuel === filters.fuel)
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
              <FunnelIcon className="h-4 w-4 mr-2" />
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
                    aria-label="Maximum price per day"
                    title="Maximum price per day"
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
                  aria-label="Transmission type"
                  title="Select transmission type"
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
                  aria-label="Minimum number of seats"
                  title="Select minimum number of seats"
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
                  aria-label="Fuel type"
                  title="Select fuel type"
                >
                  <option value="all">All</option>
                  <option value="Gas">Gas</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </div>

          {/* Scooter Listings */}
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
                  {filteredScooters.length} scooters available
                </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredScooters.map((scooter) => (
                    <Link key={scooter.id} href={`/scooters/${scooter.id}`}>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative">
                          <Image
                            src={scooter.images[0]}
                            alt={`${scooter.make} ${scooter.model}`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                          />
                          <button 
                            onClick={(e) => e.preventDefault()}
                            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                            aria-label="Add to favorites"
                            title="Add to favorites"
                          >
                            <HeartIcon className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {scooter.year} {scooter.make} {scooter.model}
                              </h3>
                              <p className="text-sm text-gray-600">{scooter.location}</p>
                              <p className="text-sm text-gray-500">
                                {scooter.features.transmission} • {scooter.features.seats} seats • {scooter.features.fuel}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Hosted by {scooter.host.name}</p>
                              <div className="flex items-center mt-1">
                                <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="ml-1 text-sm text-gray-600">
                                  {scooter.rating} ({scooter.trips} trips)
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-gray-900">${scooter.price}</span>
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