'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  CreditCardIcon,
  ShieldCheckIcon,
  MapPinIcon,
  CalendarDaysIcon,
  UserIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

interface BookingDetails {
  car: {
    make: string
    model: string
    year: number
    image: string
  }
  startDate: string
  endDate: string
  pickupLocation: string
  protection: string
  extras: Array<{
    name: string
    price: number
  }>
}

const mockBooking: BookingDetails = {
  car: {
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    image: '/api/placeholder/300/200'
  },
  startDate: '2024-01-20',
  endDate: '2024-01-25',
  pickupLocation: 'San Francisco, CA',
  protection: 'Standard',
  extras: [
    { name: 'Prepaid EV charging', price: 25 },
    { name: 'Airport pickup/dropoff', price: 50 }
  ]
}

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState<'contact' | 'payment' | 'confirm'>('contact')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    zipCode: '',
    saveCard: false
  })

  const calculateSubtotal = () => {
    const days = 5 // Calculate based on actual dates
    const basePrice = 89 * days
    const extrasTotal = mockBooking.extras.reduce((sum, extra) => sum + extra.price, 0)
    return basePrice + extrasTotal
  }

  const tripFee = Math.round(calculateSubtotal() * 0.1)
  const total = calculateSubtotal() + tripFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === 'contact') {
      setCurrentStep('payment')
    } else if (currentStep === 'payment') {
      setCurrentStep('confirm')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { id: 'contact', label: 'Contact' },
              { id: 'payment', label: 'Payment' },
              { id: 'confirm', label: 'Confirm' }
            ].map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  currentStep === step.id || (step.id === 'contact' && currentStep !== 'confirm') || (step.id === 'payment' && currentStep === 'confirm')
                    ? 'bg-scoovio-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">{step.label}</span>
                {index < 2 && (
                  <ChevronRightIcon className="h-5 w-5 text-gray-400 ml-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 'contact' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Contact information</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-scoovio-600 text-white py-3 rounded-md font-medium hover:bg-scoovio-700"
                  >
                    Continue to payment
                  </button>
                </form>
              </div>
            )}

            {currentStep === 'payment' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Payment method</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                      placeholder="1234 5678 9012 3456"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        value={formData.cvv}
                        onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                        placeholder="123"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ZIP</label>
                      <input
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                        placeholder="12345"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.saveCard}
                        onChange={(e) => setFormData({...formData, saveCard: e.target.checked})}
                        className="rounded border-gray-300 text-scoovio-600 focus:ring-scoovio-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Save this card for future bookings</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-scoovio-600 text-white py-3 rounded-md font-medium hover:bg-scoovio-700"
                  >
                    Confirm booking
                  </button>
                </form>
              </div>
            )}

            {currentStep === 'confirm' && (
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <ShieldCheckIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Booking confirmed!</h2>
                <p className="text-gray-600 mb-6">
                  Your trip has been successfully booked. You'll receive a confirmation email shortly.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-scoovio-600 text-white py-3 rounded-md font-medium hover:bg-scoovio-700">
                    View booking details
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-md font-medium hover:bg-gray-50">
                    Browse more cars
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Trip summary</h3>
              
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={mockBooking.car.image}
                  alt={`${mockBooking.car.make} ${mockBooking.car.model}`}
                  width={80}
                  height={60}
                  className="rounded"
                />
                <div>
                  <p className="font-medium">{mockBooking.car.year} {mockBooking.car.make} {mockBooking.car.model}</p>
                  <p className="text-sm text-gray-500">{mockBooking.protection} protection</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <CalendarDaysIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <span>{mockBooking.startDate} - {mockBooking.endDate}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPinIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <span>{mockBooking.pickupLocation}</span>
                </div>
              </div>

              {mockBooking.extras.length > 0 && (
                <div className="border-t pt-4 mb-4">
                  <h4 className="text-sm font-medium mb-2">Extras</h4>
                  {mockBooking.extras.map((extra, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{extra.name}</span>
                      <span>+${extra.price}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal()}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Trip fee</span>
                  <span>${tripFee}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center text-xs text-gray-500">
                <ShieldCheckIcon className="h-4 w-4 mr-1" />
                <span>Secure checkout powered by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}