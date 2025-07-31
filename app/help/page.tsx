'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I book a scooter?",
      answer: "To book a scooter, search for available scooters in your area, select your dates, choose your preferred scooter, and complete the booking process through our secure checkout."
    },
    {
      question: "What documents do I need to rent a scooter?",
      answer: "You'll need a valid driver's license, be at least 18 years old, and have a valid payment method. Some hosts may require additional verification."
    },
    {
      question: "How does insurance work?",
      answer: "All rentals include basic insurance coverage. You can also purchase additional protection plans during checkout for extra peace of mind."
    },
    {
      question: "What if I need to cancel my booking?",
      answer: "You can cancel your booking through your trips page. Refund policies vary based on the cancellation timing and host's policy."
    },
    {
      question: "How do I contact my host?",
      answer: "Once your booking is confirmed, you can message your host directly through our messaging system on the trips page."
    },
    {
      question: "What happens if the scooter breaks down?",
      answer: "Contact your host immediately and reach out to our 24/7 support. We'll help arrange roadside assistance or a replacement scooter."
    }
  ]

  const categories = [
    { name: 'Booking', count: 24 },
    { name: 'Payments', count: 18 },
    { name: 'Insurance', count: 15 },
    { name: 'Host Support', count: 12 },
    { name: 'Technical Issues', count: 9 },
    { name: 'Safety', count: 14 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Help Center</h1>
          <p className="mt-2 text-lg text-gray-600">Find answers to your questions about Scoovio</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scoovio-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                >
                  <span className="flex justify-between">
                    <span>{category.name}</span>
                    <span className="text-gray-500">({category.count})</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDownIcon 
                      className={`h-5 w-5 text-gray-500 transform transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Support */}
            <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need more help?</h3>
              <p className="text-gray-600 mb-4">Contact our support team for personalized assistance</p>
              <div className="space-y-4">
                <button className="w-full bg-scoovio-600 text-white py-3 px-4 rounded-md font-medium hover:bg-scoovio-700">
                  Send us a message
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-md font-medium hover:bg-gray-50">
                  Call support: 1-800-SCOOVIO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}