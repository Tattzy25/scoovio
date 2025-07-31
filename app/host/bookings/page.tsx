'use client'

import { useState } from 'react'

interface Booking {
  id: string
  scooterId: string
  scooterName: string
  renterName: string
  renterEmail: string
  startDate: string
  endDate: string
  totalAmount: number
  status: 'upcoming' | 'active' | 'completed' | 'cancelled'
  pickupLocation: string
  dropoffLocation: string
}

export default function HostBookingsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)

  // Mock data - replace with real API calls
  const bookings: Booking[] = [
    {
      id: '1',
      scooterId: 'scooter-1',
      scooterName: 'Vespa Primavera 150',
      renterName: 'Sarah Johnson',
      renterEmail: 'sarah.j@email.com',
      startDate: '2024-01-15',
      endDate: '2024-01-17',
      totalAmount: 120,
      status: 'upcoming',
      pickupLocation: 'Downtown San Francisco',
      dropoffLocation: 'Downtown San Francisco'
    },
    {
      id: '2',
      scooterId: 'scooter-2',
      scooterName: 'Honda PCX 150',
      renterName: 'Mike Chen',
      renterEmail: 'mike.chen@email.com',
      startDate: '2024-01-10',
      endDate: '2024-01-12',
      totalAmount: 95,
      status: 'completed',
      pickupLocation: 'Mission District',
      dropoffLocation: 'Mission District'
    },
    {
      id: '3',
      scooterId: 'scooter-3',
      scooterName: 'Yamaha NMAX 155',
      renterName: 'Emily Rodriguez',
      renterEmail: 'emily.r@email.com',
      startDate: '2024-01-13',
      endDate: '2024-01-15',
      totalAmount: 110,
      status: 'active',
      pickupLocation: 'SOMA',
      dropoffLocation: 'SOMA'
    }
  ]

  const filteredBookings = selectedStatus === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status === selectedStatus)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800'
      case 'active': return 'bg-green-100 text-green-800'
      case 'completed': return 'bg-gray-100 text-gray-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming': return 'Upcoming'
      case 'active': return 'Active'
      case 'completed': return 'Completed'
      case 'cancelled': return 'Cancelled'
      default: return status
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="mt-2 text-gray-600">Manage all your scooter bookings</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          {/* Filters */}
          <div className="border-b px-6 py-4">
            <div className="flex space-x-4">
              {['all', 'upcoming', 'active', 'completed', 'cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedStatus === status
                      ? 'bg-scoovio-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Bookings List */}
          <div className="divide-y">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-medium text-gray-900">
                        {booking.scooterName}
                      </h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {getStatusText(booking.status)}
                      </span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Renter:</span> {booking.renterName} ({booking.renterEmail})
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Dates:</span> {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Location:</span> {booking.pickupLocation}
                      </p>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">${booking.totalAmount}</p>
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="mt-1 text-sm text-scoovio-600 hover:text-scoovio-700 font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBookings.length === 0 && (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
              <p className="text-gray-600">There are no bookings matching your selected filters.</p>
            </div>
          )}
        </div>

        {/* Booking Details Modal */}
        {selectedBooking && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-900">Booking Details</h3>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="text-gray-400 hover:text-gray-500"
                  aria-label="Close modal"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">{selectedBooking.scooterName}</h4>
                  <p className="text-sm text-gray-600">Booking #{selectedBooking.id}</p>
                </div>
                
                <div className="border-t pt-4">
                  <h5 className="font-medium text-gray-900 mb-2">Renter Information</h5>
                  <p className="text-sm text-gray-600">{selectedBooking.renterName}</p>
                  <p className="text-sm text-gray-600">{selectedBooking.renterEmail}</p>
                </div>
                
                <div className="border-t pt-4">
                  <h5 className="font-medium text-gray-900 mb-2">Booking Details</h5>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Start:</span> {new Date(selectedBooking.startDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">End:</span> {new Date(selectedBooking.endDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Total:</span> ${selectedBooking.totalAmount}
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <h5 className="font-medium text-gray-900 mb-2">Location</h5>
                  <p className="text-sm text-gray-600">{selectedBooking.pickupLocation}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}