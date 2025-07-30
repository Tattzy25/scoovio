'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  CalendarDaysIcon,
  MapPinIcon,
  CarIcon,
  CurrencyDollarIcon,
  UserIcon,
  CreditCardIcon,
  BellIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

interface Booking {
  id: string
  car: {
    make: string
    model: string
    year: number
    image: string
    host: string
  }
  startDate: string
  endDate: string
  pickupLocation: string
  total: number
  status: 'upcoming' | 'current' | 'completed' | 'cancelled'
}

const mockBookings: Booking[] = [
  {
    id: '1',
    car: {
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      image: '/api/placeholder/300/200',
      host: 'John D.'
    },
    startDate: '2024-01-20',
    endDate: '2024-01-25',
    pickupLocation: 'San Francisco, CA',
    total: 445,
    status: 'upcoming'
  },
  {
    id: '2',
    car: {
      make: 'BMW',
      model: 'X5',
      year: 2022,
      image: '/api/placeholder/300/200',
      host: 'Sarah M.'
    },
    startDate: '2024-01-15',
    endDate: '2024-01-18',
    pickupLocation: 'Los Angeles, CA',
    total: 360,
    status: 'completed'
  }
]

export default function UserDashboard() {
  const [selectedTab, setSelectedTab] = useState<'bookings' | 'favorites' | 'profile' | 'payments'>('bookings')

  const upcomingBookings = mockBookings.filter(b => b.status === 'upcoming')
  const completedBookings = mockBookings.filter(b => b.status === 'completed')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
              <p className="text-sm text-gray-600">Manage your bookings and profile</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <BellIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'bookings', label: 'My Trips', icon: CalendarDaysIcon },
              { id: 'favorites', label: 'Favorites', icon: StarIcon },
              { id: 'profile', label: 'Profile', icon: UserIcon },
              { id: 'payments', label: 'Payments', icon: CreditCardIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                  selectedTab === tab.id
                    ? 'border-scoovio-500 text-scoovio-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {selectedTab === 'bookings' && (
          <div className="space-y-8">
            {/* Upcoming Bookings */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Upcoming Trips</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={booking.car.image}
                        alt={`${booking.car.make} ${booking.car.model}`}
                        className="h-20 w-32 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">
                              {booking.car.year} {booking.car.make} {booking.car.model}
                            </h4>
                            <p className="text-sm text-gray-500">Hosted by {booking.car.host}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-gray-900">${booking.total}</p>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Upcoming
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            {booking.startDate} - {booking.endDate}
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {booking.pickupLocation}
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button className="text-sm text-scoovio-600 hover:text-scoovio-500">
                            Modify trip
                          </button>
                          <button className="text-sm text-scoovio-600 hover:text-scoovio-500">
                            Contact host
                          </button>
                          <button className="text-sm text-red-600 hover:text-red-500">
                            Cancel trip
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Bookings */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Past Trips</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {completedBookings.map((booking) => (
                  <div key={booking.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={booking.car.image}
                        alt={`${booking.car.make} ${booking.car.model}`}
                        className="h-20 w-32 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">
                              {booking.car.year} {booking.car.make} {booking.car.model}
                            </h4>
                            <p className="text-sm text-gray-500">Hosted by {booking.car.host}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-gray-900">${booking.total}</p>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Completed
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            {booking.startDate} - {booking.endDate}
                          </div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {booking.pickupLocation}
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button className="text-sm text-scoovio-600 hover:text-scoovio-500">
                            Leave review
                          </button>
                          <button className="text-sm text-scoovio-600 hover:text-scoovio-500">
                            Book again
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'favorites' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Favorite Cars</h3>
            </div>
            <div className="p-6">
              <div className="text-center py-12">
                <StarIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No favorites yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Start exploring cars and save your favorites for easy booking.
                </p>
                <Link
                  href="/search"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-scoovio-600 hover:bg-scoovio-700"
                >
                  Browse cars
                </Link>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'profile' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Profile Settings</h3>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                />
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-scoovio-600 text-white rounded-md hover:bg-scoovio-700">
                  Save changes
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'payments' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Payment Methods</h3>
              </div>
              <div className="p-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/25</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-sm text-scoovio-600 hover:text-scoovio-500">Edit</button>
                      <button className="text-sm text-red-600 hover:text-red-500">Remove</button>
                    </div>
                  </div>
                </div>
                <button className="mt-4 text-sm text-scoovio-600 hover:text-scoovio-500">
                  + Add payment method
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Trip History</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Tesla Model 3</p>
                      <p className="text-sm text-gray-500">Jan 15-18, 2024</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$445.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">BMW X5</p>
                      <p className="text-sm text-gray-500">Dec 20-25, 2023</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$360.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}