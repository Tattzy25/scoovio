'use client'

import { useState } from 'react'

interface Earning {
  id: string
  bookingId: string
  scooterName: string
  date: string
  amount: number
  platformFee: number
  netAmount: number
  status: 'pending' | 'paid'
}

interface MonthlySummary {
  month: string
  totalBookings: number
  grossEarnings: number
  platformFees: number
  netEarnings: number
}

export default function HostEarningsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('month')

  // Mock data - replace with real API calls
  const earnings: Earning[] = [
    {
      id: '1',
      bookingId: 'booking-1',
      scooterName: 'Vespa Primavera 150',
      date: '2024-01-15',
      amount: 120,
      platformFee: 12,
      netAmount: 108,
      status: 'paid'
    },
    {
      id: '2',
      bookingId: 'booking-2',
      scooterName: 'Honda PCX 150',
      date: '2024-01-14',
      amount: 95,
      platformFee: 9.5,
      netAmount: 85.5,
      status: 'paid'
    },
    {
      id: '3',
      bookingId: 'booking-3',
      scooterName: 'Yamaha NMAX 155',
      date: '2024-01-13',
      amount: 110,
      platformFee: 11,
      netAmount: 99,
      status: 'pending'
    }
  ]

  const monthlySummary: MonthlySummary = {
    month: 'January 2024',
    totalBookings: 12,
    grossEarnings: 1440,
    platformFees: 144,
    netEarnings: 1296
  }

  const totalEarnings = earnings.reduce((sum, earning) => sum + earning.netAmount, 0)
  const pendingEarnings = earnings.filter(e => e.status === 'pending').reduce((sum, earning) => sum + earning.netAmount, 0)
  const paidEarnings = earnings.filter(e => e.status === 'paid').reduce((sum, earning) => sum + earning.netAmount, 0)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'paid': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Earnings</h1>
          <p className="mt-2 text-gray-600">Track your earnings and payment history</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">${totalEarnings.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">${pendingEarnings.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Paid</p>
                <p className="text-2xl font-bold text-gray-900">${paidEarnings.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">{monthlySummary.month} Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Bookings</p>
              <p className="text-lg font-semibold text-gray-900">{monthlySummary.totalBookings}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Gross</p>
              <p className="text-lg font-semibold text-gray-900">${monthlySummary.grossEarnings}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Platform Fee</p>
              <p className="text-lg font-semibold text-gray-900">${monthlySummary.platformFees}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Net</p>
              <p className="text-lg font-semibold text-gray-900">${monthlySummary.netEarnings}</p>
            </div>
          </div>
        </div>

        {/* Earnings List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-medium text-gray-900">Recent Earnings</h2>
          </div>
          <div className="divide-y">
            {earnings.map((earning) => (
              <div key={earning.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{earning.scooterName}</h3>
                    <p className="text-sm text-gray-600">Booking #{earning.bookingId}</p>
                    <p className="text-xs text-gray-500">{new Date(earning.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(earning.status)}`}>
                        {earning.status === 'pending' ? 'Pending' : 'Paid'}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mt-1">${earning.netAmount.toFixed(2)}</p>
                    <p className="text-xs text-gray-500">Gross: ${earning.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {earnings.length === 0 && (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No earnings yet</h3>
              <p className="text-gray-600">Start hosting scooters to earn money!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}