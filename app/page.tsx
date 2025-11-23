'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon, MapPinIcon, CalendarDaysIcon, UserGroupIcon, StarIcon, ShieldCheckIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/outline'
import HowItWorks from '../components/how-it-works'
import Testimonials from '../components/testimonials'

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<EquipmentType | 'ALL'>('ALL')

  const categories = [
    { key: 'ALL', label: 'All Equipment', icon: '🔍' },
    { key: EquipmentType.MOBILITY_SCOOTER, label: 'Mobility Scooters', icon: '🛴' },
    { key: EquipmentType.BABY_STROLLER, label: 'Baby Strollers', icon: '👶' },
  ]

  const featuredEquipment = [
    // Mobility Scooters
    {
      id: 1,
      type: EquipmentType.MOBILITY_SCOOTER,
      brand: 'Pride Mobility',
      model: 'Go-Go Elite',
      year: 2023,
      price: 45,
      rating: 4.9,
      trips: 124,
      image: '/api/placeholder/300/200',
      location: 'Los Angeles, CA',
      features: ['Foldable', 'LED Lights', '18 mile range']
    },
    {
      id: 2,
      type: EquipmentType.MOBILITY_SCOOTER,
      brand: 'Drive Medical',
      model: 'Scout Compact',
      year: 2023,
      price: 38,
      rating: 4.8,
      trips: 89,
      image: '/api/placeholder/300/200',
      location: 'San Francisco, CA',
      features: ['Lightweight', 'Storage Basket', '12 mile range']
    },
    // Baby Strollers
    {
      id: 3,
      type: EquipmentType.BABY_STROLLER,
      brand: 'UPPAbaby',
      model: 'Vista V2',
      year: 2023,
      price: 25,
      rating: 4.9,
      trips: 156,
      image: '/api/placeholder/300/200',
      location: 'Miami, FL',
      features: ['Reversible Seat', 'Car Seat Compatible', 'Large Storage']
    },
    {
      id: 4,
      type: EquipmentType.BABY_STROLLER,
      brand: 'Bugaboo',
      model: 'Fox 3',
      year: 2023,
      price: 32,
      rating: 5.0,
      trips: 45,
      image: '/api/placeholder/300/200',
      location: 'New York, NY',
      features: ['All-Terrain', 'One-Hand Fold', 'Adjustable Handlebar']
    }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to search results with equipment type filter
    const params = new URLSearchParams()
    if (searchLocation) params.set('location', searchLocation)
    if (startDate) params.set('start', startDate)
    if (endDate) params.set('end', endDate)
    if (selectedCategory !== 'ALL') params.set('type', selectedCategory)
    
    window.location.href = `/search?${params.toString()}`
  }

  const filteredEquipment = selectedCategory === 'ALL' 
    ? featuredEquipment 
    : featuredEquipment.filter(item => item.type === selectedCategory)

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
              Rent Mobility Equipment
            </h1>
            <p className="mt-6 text-xl text-scoovio-100">
              Book mobility scooters and baby strollers from trusted, local hosts
            </p>
          </div>

          {/* Equipment Categories */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setSelectedCategory(category.key as EquipmentType | 'ALL')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.key
                      ? 'bg-white text-scoovio-600'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Form */}
          <div className="mt-8 max-w-4xl mx-auto">
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
                      placeholder="Enter city or location"
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
                  Search scooters
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Featured Equipment */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured {selectedCategory === 'ALL' ? 'Equipment' : 
                selectedCategory === EquipmentType.MOBILITY_SCOOTER ? 'Mobility Scooters' : 'Baby Strollers'}
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              {selectedCategory === 'ALL' ? 'Browse our most popular mobility equipment' :
               selectedCategory === EquipmentType.MOBILITY_SCOOTER ? 'Browse our most popular mobility scooters' :
               'Browse our most popular baby strollers'}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredEquipment.map((equipment) => (
              <div key={equipment.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={equipment.image}
                    alt={`${equipment.brand} ${equipment.model}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <HeartIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  <div className="absolute top-2 left-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
                      {equipment.type === EquipmentType.MOBILITY_SCOOTER ? '🛴' : '👶'}
                      {equipment.type === EquipmentType.MOBILITY_SCOOTER ? 'Scooter' : 'Stroller'}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {equipment.year} {equipment.brand} {equipment.model}
                      </h3>
                      <p className="text-sm text-gray-600">{equipment.location}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1">
                      {equipment.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {feature}
                        </span>
                      ))}
                      {equipment.features.length > 2 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{equipment.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {equipment.rating} ({equipment.trips} trips)
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900">${equipment.price}</span>
                      <span className="text-sm text-gray-600">/day</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/search${selectedCategory !== 'ALL' ? `?type=${selectedCategory}` : ''}`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-scoovio-700 bg-scoovio-100 hover:bg-scoovio-200"
            >
              View all {selectedCategory === 'ALL' ? 'equipment' : 
                selectedCategory === EquipmentType.MOBILITY_SCOOTER ? 'mobility scooters' : 'baby strollers'}
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
                Every rental includes liability insurance and 24/7 support
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mx-auto h-12 w-12 rounded-md bg-scoovio-600 text-white">
                <ClockIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Skip the store</h3>
              <p className="mt-2 text-base text-gray-600">
                Book equipment directly from local hosts and skip the rental store hassle
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mx-auto h-12 w-12 rounded-md bg-scoovio-600 text-white">
                <StarIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Quality equipment</h3>
              <p className="mt-2 text-base text-gray-600">
                Choose from thousands of mobility scooters and baby strollers in your area
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

      <HowItWorks />
      <Testimonials />

      {/* Host CTA */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Turn your mobility scooter into extra income
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              List your mobility scooter on Scoovio and earn up to $500 per month
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
