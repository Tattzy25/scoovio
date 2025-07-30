'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon, MapPinIcon, CalendarDaysIcon, UserGroupIcon, StarIcon, ShieldCheckIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const featuredCars = [
    {
      id: 1,
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 89,
      rating: 4.9,
      trips: 124,
      image: '/api/placeholder/300/200',
      location: 'Los Angeles, CA'
    },
    {
      id: 2,
      make: 'BMW',
      model: 'X5',
      year: 2023,
      price: 129,
      rating: 4.8,
      trips: 89,
      image: '/api/placeholder/300/200',
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      make: 'Honda',
      model: 'Civic',
      year: 2022,
      price: 45,
      rating: 4.7,
      trips: 256,
      image: '/api/placeholder/300/200',
      location: 'Miami, FL'
    },
    {
      id: 4,
      make: 'Porsche',
      model: '911',
      year: 2023,
      price: 299,
      rating: 5.0,
      trips: 45,
      image: '/api/placeholder/300/200',
      location: 'New York, NY'
    }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to search results
    window.location.href = `/search?location=${searchLocation}&start=${startDate}&end=${endDate}`
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-scoovio-600 to-scoovio-700">
        <div className="absolute inset-0">
          <Image
            src="/api/placeholder/1920/600"
            alt="Hero background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Skip the rental car counter
            </h1>
            <p className="mt-6 text-xl text-scoovio-100">
              Book better cars from trusted, local hosts
            </p>
          </div>

          {/* Search Form */}
          <div className="mt-12 max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where
                  </label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Enter city or airport"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From
                  </label>
                  <div className="relative">
                    <CalendarDaysIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Until
                  </label>
                  <div className="relative">
                    <CalendarDaysIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-scoovio-600 text-white py-3 px-4 rounded-md hover:bg-scoovio-700 transition-colors flex items-center justify-center"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  Search cars
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Featured Cars */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured cars</h2>
            <p className="mt-2 text-lg text-gray-600">Browse our most popular vehicles</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
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
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {car.rating} ({car.trips} trips)
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                      <span className="text-sm text-gray-600">/day</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/search"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-scoovio-700 bg-scoovio-100 hover:bg-scoovio-200"
            >
              View all cars
            </Link>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why choose Scoovio?</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto h-12 w-12 rounded-md bg-scoovio-600 text-white">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Protection included</h3>
              <p className="mt-2 text-base text-gray-600">
                Every trip includes liability insurance and 24/7 roadside assistance
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mx-auto h-12 w-12 rounded-md bg-scoovio-600 text-white">
                <ClockIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Skip the counter</h3>
              <p className="mt-2 text-base text-gray-600">
                Book cars directly from local hosts and skip the rental counter lines
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mx-auto h-12 w-12 rounded-md bg-scoovio-600 text-white">
                <StarIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Better cars</h3>
              <p className="mt-2 text-base text-gray-600">
                Choose from thousands of unique cars in your neighborhood
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mx-auto h-12 w-12 rounded-md bg-scoovio-600 text-white">
                <UserGroupIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Trusted hosts</h3>
              <p className="mt-2 text-base text-gray-600">
                All hosts are verified and reviewed by our community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Host CTA */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Turn your car into extra income
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              List your car on Scoovio and earn up to $1,000 per month
            </p>
            <div className="mt-8">
              <Link
                href="/host/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Start earning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}