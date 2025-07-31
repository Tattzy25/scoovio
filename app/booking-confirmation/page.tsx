'use client'

import { useSearchParams } from 'next/navigation'
import { CheckCircleIcon, CalendarDaysIcon, MapPinIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function BookingConfirmation() {
  const searchParams = useSearchParams()
  
  const bookingDetails = {
    confirmationNumber: `SC${Date.now().toString().slice(-8)}`,
    scooter: searchParams.get('scooter') || 'Vespa Primavera',
    startDate: searchParams.get('startDate') || '2024-01-20',
    endDate: searchParams.get('endDate') || '2024-01-25',
    total: searchParams.get('total') || '534',
    pickupLocation: 'San Francisco, CA',
    hostName: 'Sarah M.'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
            <p className="text-lg text-gray-600">Your scooter rental is all set</p>
            <p className="text-sm text-gray-500 mt-2">Confirmation #{bookingDetails.confirmationNumber}</p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Trip Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CalendarDaysIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Dates</p>
                  <p className="text-sm text-gray-600">
                    {new Date(bookingDetails.startDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })} - {new Date(bookingDetails.endDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Pickup Location</p>
                  <p className="text-sm text-gray-600">{bookingDetails.pickupLocation}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0">🛵</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Scooter</p>
                  <p className="text-sm text-gray-600">{bookingDetails.scooter}</p>
                </div>
              </div>

              <div className="flex items-start">
                <CreditCardIcon className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Total Paid</p>
                  <p className="text-sm text-gray-600">${bookingDetails.total}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0">👤</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Host</p>
                  <p className="text-sm text-gray-600">{bookingDetails.hostName}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                • You'll receive an email confirmation with all the details
              </p>
              <p className="text-sm text-gray-600">
                • Contact your host {bookingDetails.hostName} to coordinate pickup
              </p>
              <p className="text-sm text-gray-600">
                • Download the Scoovio app to manage your trip
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard"
              className="flex-1 bg-scoovio-600 text-white py-3 px-4 rounded-md font-medium text-center hover:bg-scoovio-700"
            >
              View My Trips
            </Link>
            <Link
              href="/messages"
              className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-md font-medium text-center hover:bg-gray-50"
            >
              Message Host
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/search"
              className="text-sm text-scoovio-600 hover:text-scoovio-500"
            >
              Find more scooters
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}