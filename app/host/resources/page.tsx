'use client'

import { BookOpenIcon, VideoCameraIcon, DocumentTextIcon, CalculatorIcon, LightBulbIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function HostResourcesPage() {
  const resources = [
    {
      category: "Getting Started",
      items: [
        { title: "Host Onboarding Guide", type: "Guide", duration: "15 min", icon: BookOpenIcon },
        { title: "Setting Your Price", type: "Calculator", duration: "5 min", icon: CalculatorIcon },
        { title: "Taking Great Photos", type: "Video", duration: "10 min", icon: VideoCameraIcon }
      ]
    },
    {
      category: "Managing Your Scooter",
      items: [
        { title: "Maintenance Checklist", type: "Template", duration: "Download", icon: DocumentTextIcon },
        { title: "Seasonal Preparation", type: "Guide", duration: "8 min", icon: BookOpenIcon },
        { title: "Insurance Requirements", type: "Article", duration: "5 min", icon: DocumentTextIcon }
      ]
    },
    {
      category: "Maximizing Earnings",
      items: [
        { title: "Pricing Strategies", type: "Guide", duration: "12 min", icon: LightBulbIcon },
        { title: "Peak Season Tips", type: "Article", duration: "7 min", icon: LightBulbIcon },
        { title: "Guest Communication", type: "Video", duration: "8 min", icon: VideoCameraIcon }
      ]
    }
  ]

  const tools = [
    { name: "Earnings Calculator", description: "Estimate your monthly income", icon: CalculatorIcon },
    { name: "Market Insights", description: "Local demand and pricing data", icon: LightBulbIcon },
    { name: "Photo Guide", description: "Tips for taking appealing photos", icon: VideoCameraIcon },
    { name: "Host Community", description: "Connect with other hosts", icon: UsersIcon }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Host Resources</h1>
          <p className="mt-2 text-lg text-gray-600">Everything you need to succeed as a Scoovio host</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-scoovio-100 rounded-lg flex items-center justify-center">
                    <tool.icon className="h-6 w-6 text-scoovio-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resources.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-scoovio-100 rounded-lg flex items-center justify-center mr-4">
                        <item.icon className="h-5 w-5 text-scoovio-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="bg-gray-100 px-2 py-1 rounded mr-2">{item.type}</span>
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
          <div className="bg-white rounded-lg shadow-sm">
            <div className="divide-y divide-gray-200">
              {[
                { title: "How to Get Your First Booking", views: "12.5k", time: "5 min read" },
                { title: "Setting Competitive Prices", views: "8.7k", time: "7 min read" },
                { title: "Dealing with Difficult Guests", views: "6.2k", time: "8 min read" },
                { title: "Insurance Claims Process", views: "4.8k", time: "6 min read" },
                { title: "Tax Tips for Scooter Hosts", views: "3.9k", time: "10 min read" }
              ].map((article, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
                      <p className="text-sm text-gray-500">{article.views} views • {article.time}</p>
                    </div>
                    <div className="text-scoovio-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Host Webinars */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "New Host Orientation", date: "Every Tuesday", time: "2:00 PM EST" },
              { title: "Advanced Hosting Strategies", date: "Every Thursday", time: "7:00 PM EST" }
            ].map((webinar, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.date} at {webinar.time}</p>
                <button className="w-full bg-scoovio-600 text-white py-2 px-4 rounded-md font-medium hover:bg-scoovio-700">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}