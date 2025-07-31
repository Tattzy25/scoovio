'use client'

import { CalendarDaysIcon, ClockIcon, ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function CancellationPage() {
  const cancellationPolicies = [
    {
      timeframe: "Free cancellation",
      description: "Cancel within 24 hours of booking for full refund",
      details: "No questions asked, instant refund to original payment method"
    },
    {
      timeframe: "More than 24 hours before trip",
      description: "Full refund minus processing fee",
      details: "5% processing fee applies, refund within 3-5 business days"
    },
    {
      timeframe: "Less than 24 hours before trip",
      description: "Partial refund based on host policy",
      details: "Refund amount varies by host's cancellation policy"
    },
    {
      timeframe: "During trip",
      description: "No refund unless exceptional circumstances",
      details: "Contact support for emergency situations"
    }
  ]

  const stepsToCancel = [
    {
      step: 1,
      title: "Go to Your Trips",
      description: "Log into your account and navigate to the 'Trips' section"
    },
    {
      step: 2,
      title: "Select the Trip",
      description: "Find the booking you want to cancel and click 'View Details'"
    },
    {
      step: 3,
      title: "Cancel Booking",
      description: "Click the 'Cancel Trip' button and confirm your cancellation"
    },
    {
      step: 4,
      title: "Receive Confirmation",
      description: "You'll receive an email confirmation with refund details"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Cancellation Policy</h1>
          <p className="mt-2 text-lg text-gray-600">Flexible cancellation options for your peace of mind</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cancellation Policies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cancellation Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cancellationPolicies.map((policy, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center">
                  <div className="mb-4">
                    {index === 0 ? (
                      <ShieldCheckIcon className="h-12 w-12 text-green-500 mx-auto" />
                    ) : index === 1 ? (
                      <ClockIcon className="h-12 w-12 text-blue-500 mx-auto" />
                    ) : index === 2 ? (
                      <ExclamationTriangleIcon className="h-12 w-12 text-yellow-500 mx-auto" />
                    ) : (
                      <ExclamationTriangleIcon className="h-12 w-12 text-red-500 mx-auto" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{policy.timeframe}</h3>
                  <p className="text-sm text-gray-600 mb-3">{policy.description}</p>
                  <p className="text-xs text-gray-500">{policy.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Cancel */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Cancel Your Booking</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stepsToCancel.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 bg-scoovio-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Refund Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Refund Processing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Refunds processed within 3-5 business days</li>
                <li>• Original payment method used for refund</li>
                <li>• Processing fees may apply based on timing</li>
                <li>• Partial refunds calculated pro-rata</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Exceptions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Force majeure events (full refund)</li>
                <li>• Host cancellations (full refund)</li>
                <li>• Safety concerns (case-by-case review)</li>
                <li>• Document verification issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help with Cancellation?</h2>
          <div className="bg-scoovio-50 rounded-lg p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Our Support Team</h3>
              <p className="text-gray-600 mb-6">
                If you have special circumstances or need assistance with your cancellation, 
                our support team is here to help.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <button className="w-full sm:w-auto bg-scoovio-600 text-white px-6 py-3 rounded-md font-medium hover:bg-scoovio-700">
                  Message Support
                </button>
                <button className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50">
                  Call: 1-800-SCOOVIO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}