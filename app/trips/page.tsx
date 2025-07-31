'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDaysIcon, MapPinIcon, ClockIcon, StarIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

export default function TripsPage() {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingTrips = [
    {
      id: 1,
      scooter: {
        make: 'Vespa',
        model: 'Primavera',
        year: 2023,
        image: '/api/placeholder/300/200'
      },
      host: {
        name: 'Alex Rivera',
        avatar: '/api/placeholder/50/50'
      },
      dates: {
        start: '2024-01-15',
        end: '2024-01-18'
      },
      location: 'Los Angeles, CA',
      price: 267,
      status: 'confirmed'
    },
    {
      id: 2,
      scooter: {
        make: 'Honda',
        model: 'PCX',
        year: 2023,
        image: '/api/placeholder/300/200'
      },
      host: {
        name: 'Sarah Chen',
        avatar: '/api/placeholder/50/50'
      },
      dates: {
        start: '2024-01-20',
        end: '2024-01-22'
      },
      location: 'San Francisco, CA',
      price: 258,
      status: 'confirmed'
    }
  ]

  const completedTrips = [
    {
      id: 3,
      scooter: {
        make: 'Yamaha',
        model: 'AeroX',
        year: 2022,
        image: '/api/placeholder/300/200'
      },
      host: {
        name: 'Mike Johnson',
        avatar: '/api/placeholder/50/50'
      },
      dates: {
        start: '2023-12-20',
        end: '2023-12-25'
      },
      location: 'Miami, FL',
      price: 225,
      rating: 5,
      review: "Perfect scooter for exploring Miami! Mike was a great host."
    },
    {
      id: 4,
      scooter: {
        make: 'Piaggio',
        model: 'Liberty',
        year: 2023,
        image: '/api/placeholder/300/200'
      },
      host: {
        name: 'Emma Wilson',
        avatar: '/api/placeholder/50/50'
      },
      dates: {
        start: '2023-12-10',
        end: '2023-12-12'
      },
      location: 'New York, NY',
      price: 598,
      rating: 4,
      review: "Good experience overall. Scooter was clean and reliable."
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your trips</h1>
          <p className="mt-2 text-gray-600">Manage your upcoming and past scooter rentals</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upcoming'
                  ? 'border-scoovio-500 text-scoovio-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upcoming ({upcomingTrips.length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'completed'
                  ? 'border-scoovio-500 text-scoovio-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Completed ({completedTrips.length})
            </button>
          </nav>
        </div>

        {/* Trips List */}
        <div className="mt-8">
          {activeTab === 'upcoming' && (
            <div className="space-y-6">
              {upcomingTrips.length === 0 ? (
                <div className="text-center py-12">
                  <CalendarDaysIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No upcoming trips</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Book your first scooter rental to see it here.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/search"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-scoovio-600 hover:bg-scoovio-700"
                    >
                      Find scooters
                    </Link>
                  </div>
                </div>
              ) : (
                upcomingTrips.map((trip) => (
                  <div key={trip.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <Image
                            src={trip.scooter.image}
                            alt={`${trip.scooter.make} ${trip.scooter.model}`}
                            width={120}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {trip.scooter.year} {trip.scooter.make} {trip.scooter.model}
                            </h3>
                            <p className="text-sm text-gray-600 flex items-center mt-1">
                              <MapPinIcon className="h-4 w-4 mr-1" />
                              {trip.location}
                            </p>
                            <div className="flex items-center text-sm text-gray-600 mt-2">
                              <CalendarDaysIcon className="h-4 w-4 mr-1" />
                              {formatDate(trip.dates.start)} - {formatDate(trip.dates.end)}
                            </div>
                            <div className="flex items-center mt-2">
                              <Image
                                src={trip.host.avatar}
                                alt={trip.host.name}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              <span className="ml-2 text-sm text-gray-600">Host: {trip.host.name}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">${trip.price}</p>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {trip.status}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-4">
                        <Link
                          href={`/scooters/${trip.id}`}
                          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View details
                        </Link>
                        <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <ChatBubbleLeftIcon className="h-4 w-4 mr-1" />
                          Message host
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'completed' && (
            <div className="space-y-6">
              {completedTrips.map((trip) => (
                <div key={trip.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Image
                          src={trip.scooter.image}
                          alt={`${trip.scooter.make} ${trip.scooter.model}`}
                          width={120}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {trip.scooter.year} {trip.scooter.make} {trip.scooter.model}
                          </h3>
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {trip.location}
                          </p>
                          <div className="flex items-center text-sm text-gray-600 mt-2">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            {formatDate(trip.dates.start)} - {formatDate(trip.dates.end)}
                          </div>
                          <div className="flex items-center mt-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-4 w-4 ${
                                  i < trip.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">{trip.rating} stars</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">${trip.price}</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Completed
                        </span>
                      </div>
                    </div>
                    {trip.review && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700 italic">"{trip.review}"</p>
                      </div>
                    )}
                    <div className="mt-4 flex space-x-4">
                      <Link
                        href={`/scooters/${trip.id}`}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View scooter
                      </Link>
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <StarIcon className="h-4 w-4 mr-1" />
                        Write review
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}