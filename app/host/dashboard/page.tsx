'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  MapPinIcon,
  CarIcon,
  ChartBarIcon,
  BellIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

interface Car {
  id: string
  make: string
  model: string
  year: number
  price: number
  location: string
  image: string
  status: 'active' | 'inactive' | 'pending'
  bookings: number
  earnings: number
}

const mockCars: Car[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 89,
    location: 'San Francisco, CA',
    image: '/api/placeholder/300/200',
    status: 'active',
    bookings: 12,
    earnings: 1068
  },
  {
    id: '2',
    make: 'BMW',
    model: 'X5',
    year: 2022,
    price: 120,
    location: 'Los Angeles, CA',
    image: '/api/placeholder/300/200',
    status: 'active',
    bookings: 8,
    earnings: 960
  },
  {
    id: '3',
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    price: 45,
    location: 'San Diego, CA',
    image: '/api/placeholder/300/200',
    status: 'pending',
    bookings: 0,
    earnings: 0
  }
]

export default function HostDashboard() {
  const [cars, setCars] = useState<Car[]>(mockCars)
  const [selectedTab, setSelectedTab] = useState<'overview' | 'cars' | 'bookings' | 'earnings'>('overview')

  const totalEarnings = cars.reduce((sum, car) => sum + car.earnings, 0)
  const totalBookings = cars.reduce((sum, car) => sum + car.bookings, 0)
  const activeCars = cars.filter(car => car.status === 'active').length

  const upcomingBookings = [
    {
      id: '1',
      car: 'Tesla Model 3',
      guest: 'John Doe',
      startDate: '2024-01-15',
      endDate: '2024-01-18',
      total: 267,
      status: 'confirmed'
    },
    {
      id: '2',
      car: 'BMW X5',
      guest: 'Jane Smith',
      startDate: '2024-01-20',
      endDate: '2024-01-22',
      total: 240,
      status: 'pending'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Host Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back! Here's your hosting summary.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <BellIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
              <Link
                href="/host/cars/new"
                className="flex items-center px-4 py-2 bg-scoovio-600 text-white rounded-md hover:bg-scoovio-700"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                List a car
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CurrencyDollarIcon className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">${totalEarnings.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CalendarDaysIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{totalBookings}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CarIcon className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Cars</p>
                <p className="text-2xl font-bold text-gray-900">{activeCars}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'cars', label: 'My Cars' },
              { id: 'bookings', label: 'Bookings' },
              { id: 'earnings', label: 'Earnings' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === tab.id
                    ? 'border-scoovio-500 text-scoovio-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{booking.car}</p>
                        <p className="text-sm text-gray-500">{booking.guest}</p>
                        <p className="text-xs text-gray-400">
                          {booking.startDate} - {booking.endDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">${booking.total}</p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-4">
                <Link
                  href="/host/cars/new"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <PlusIcon className="h-8 w-8 text-scoovio-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">List a new car</p>
                    <p className="text-sm text-gray-500">Start earning with another vehicle</p>
                  </div>
                </Link>
                
                <Link
                  href="/host/bookings"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <CalendarDaysIcon className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Manage bookings</p>
                    <p className="text-sm text-gray-500">View upcoming trips</p>
                  </div>
                </Link>
                
                <Link
                  href="/host/earnings"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <ChartBarIcon className="h-8 w-8 text-green-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">View earnings</p>
                    <p className="text-sm text-gray-500">Track your income</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'cars' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Your Cars</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Car
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price/day
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bookings
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cars.map((car) => (
                    <tr key={car.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-lg object-cover"
                            src={car.image}
                            alt={`${car.make} ${car.model}`}
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {car.year} {car.make} {car.model}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {car.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${car.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          car.status === 'active' ? 'bg-green-100 text-green-800' :
                          car.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {car.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {car.bookings}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-scoovio-600 hover:text-scoovio-900">
                            <EyeIcon className="h-4 w-4" />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'bookings' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">All Bookings</h3>
            </div>
            <div className="p-6">
              <div className="text-center py-12">
                <CalendarDaysIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Bookings will appear here when guests reserve your cars.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'earnings' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Earnings Overview</h3>
              </div>
              <div className="p-6">
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ChartBarIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Earnings chart will appear here</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">This Month</h4>
                <p className="text-3xl font-bold text-gray-900">$2,028</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Average per trip</h4>
                <p className="text-3xl font-bold text-gray-900">$89</p>
                <p className="text-sm text-gray-500">Based on 20 trips</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}