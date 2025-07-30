'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  MapPinIcon,
  CalendarDaysIcon,
  StarIcon,
  ShieldCheckIcon,
  UsersIcon,
  FireIcon,
  CogIcon,
  KeyIcon,
  CheckIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

interface Car {
  id: string
  make: string
  model: string
  year: number
  images: string[]
  price: number
  rating: number
  reviews: number
  location: string
  host: {
    name: string
    avatar: string
    trips: number
    rating: number
    responseTime: string
  }
  features: {
    seats: number
    transmission: string
    fuel: string
    doors: number
  }
  description: string
  guidelines: string[]
  extras: Array<{
    name: string
    price: number
    included: boolean
  }>
}

const mockCar: Car = {
  id: '1',
  make: 'Tesla',
  model: 'Model 3',
  year: 2023,
  images: [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600'
  ],
  price: 89,
  rating: 4.9,
  reviews: 127,
  location: 'San Francisco, CA',
  host: {
    name: 'Alex Chen',
    avatar: '/api/placeholder/48/48',
    trips: 312,
    rating: 4.9,
    responseTime: 'within an hour'
  },
  features: {
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    doors: 4
  },
  description: 'Experience the future of driving with this pristine Tesla Model 3. Perfect for city driving and long trips with exceptional range and performance. Fully loaded with autopilot, premium interior, and supercharging access.',
  guidelines: [
    'No smoking or pets allowed',
    'Return with at least 50% charge',
    'Treat the car with care as if it were your own',
    'Report any issues immediately'
  ],
  extras: [
    { name: 'Prepaid EV charging', price: 25, included: false },
    { name: 'Airport pickup/dropoff', price: 50, included: false },
    { name: 'Child seat', price: 15, included: false },
    { name: 'Premium cleaning', price: 35, included: false }
  ]
}

export default function CarDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [isFavorite, setIsFavorite] = useState(false)
  const [showAllImages, setShowAllImages] = useState(false)

  const toggleExtra = (name: string) => {
    setSelectedExtras(prev =>
      prev.includes(name)
        ? prev.filter(e => e !== name)
        : [...prev, name]
    )
  }

  const calculateTotal = () => {
    if (!startDate || !endDate) return mockCar.price
    
    const start = new Date(startDate)
    const end = new Date(endDate)
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    
    const extrasTotal = mockCar.extras
      .filter(extra => selectedExtras.includes(extra.name))
      .reduce((sum, extra) => sum + extra.price, 0)
    
    return (mockCar.price * days) + extrasTotal
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {mockCar.year} {mockCar.make} {mockCar.model}
          </h1>
          <div className="flex items-center mt-2 space-x-4">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">
                {mockCar.rating} ({mockCar.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-gray-400" />
              <span className="ml-1 text-sm text-gray-600">{mockCar.location}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image
                  src={mockCar.images[selectedImage]}
                  alt={`${mockCar.make} ${mockCar.model}`}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  {isFavorite ? (
                    <HeartSolidIcon className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6 text-gray-600" />
                  )}
                </button>
                <button
                  onClick={() => setShowAllImages(true)}
                  className="absolute bottom-4 right-4 px-4 py-2 bg-black/60 text-white text-sm rounded-md hover:bg-black/80"
                >
                  Show all photos
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1 p-2">
                {mockCar.images.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-video ${selectedImage === index ? 'ring-2 ring-scoovio-500' : ''}`}
                  >
                    <Image
                      src={image}
                      alt={`${mockCar.make} ${mockCar.model} ${index + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">About this car</h2>
              <p className="text-gray-600 mb-6">{mockCar.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{mockCar.features.seats} seats</span>
                </div>
                <div className="flex items-center">
                  <CogIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{mockCar.features.transmission}</span>
                </div>
                <div className="flex items-center">
                  <FireIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{mockCar.features.fuel}</span>
                </div>
                <div className="flex items-center">
                  <CarIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{mockCar.features.doors} doors</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-3">Guidelines</h3>
                <ul className="space-y-2">
                  {mockCar.guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Host Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Hosted by {mockCar.host.name}</h2>
              <div className="flex items-center space-x-4">
                <Image
                  src={mockCar.host.avatar}
                  alt={mockCar.host.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{mockCar.host.name}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{mockCar.host.trips} trips</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1">{mockCar.host.rating}</span>
                    </div>
                    <span>•</span>
                    <span>Responds {mockCar.host.responseTime}</span>
                  </div>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Message host
              </button>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Pickup location</h2>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4">
                {/* Map placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <MapPinIcon className="h-12 w-12" />
                  <span className="ml-2">Map will be displayed here</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{mockCar.location}</p>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">${mockCar.price}</span>
                  <span className="text-gray-500 ml-1">/day</span>
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pickup</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                  />
                </div>
              </div>

              {/* Extras */}
              {mockCar.extras.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Extras</h3>
                  <div className="space-y-2">
                    {mockCar.extras.map((extra) => (
                      <label key={extra.name} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedExtras.includes(extra.name)}
                          onChange={() => toggleExtra(extra.name)}
                          className="rounded border-gray-300 text-scoovio-600 focus:ring-scoovio-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 flex-1">{extra.name}</span>
                        <span className="text-sm text-gray-500">+${extra.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Total */}
              {startDate && endDate && (
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Trip fee</span>
                    <span>${Math.round(calculateTotal() * 0.1)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold mt-2">
                    <span>Total</span>
                    <span>${calculateTotal() + Math.round(calculateTotal() * 0.1)}</span>
                  </div>
                </div>
              )}

              <button
                disabled={!startDate || !endDate}
                className="w-full bg-scoovio-600 text-white py-3 rounded-md font-medium hover:bg-scoovio-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>

              <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                  <ShareIcon className="h-4 w-4 mr-1" />
                  Share
                </button>
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                  <HeartIcon className="h-4 w-4 mr-1" />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}