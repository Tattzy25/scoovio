'use client'

import { ShieldCheckIcon, ExclamationTriangleIcon, ChatBubbleLeftIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function SafetyPage() {
  const safetyFeatures = [
    {
      icon: ShieldCheckIcon,
      title: "Verified Hosts",
      description: "All hosts are verified with driver's license and background checks"
    },
    {
      icon: ExclamationTriangleIcon,
      title: "24/7 Emergency Support",
      description: "Round-the-clock support team ready to assist with any safety concerns"
    },
    {
      icon: ChatBubbleLeftIcon,
      title: "Secure Messaging",
      description: "Communicate safely with hosts through our encrypted messaging system"
    },
    {
      icon: PhoneIcon,
      title: "Roadside Assistance",
      description: "Immediate help available if your scooter breaks down or has issues"
    }
  ]

  const safetyTips = [
    "Always wear a helmet and appropriate safety gear",
    "Inspect the scooter before each ride for any damage",
    "Follow local traffic laws and speed limits",
    "Never ride under the influence of alcohol or drugs",
    "Use designated bike lanes when available",
    "Be extra cautious in bad weather conditions",
    "Park responsibly and don't block pedestrian paths",
    "Report any safety concerns to your host immediately"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-scoovio-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white">Your Safety is Our Priority</h1>
          <p className="mt-4 text-xl text-scoovio-100">
            Comprehensive safety measures for worry-free scooter rentals
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Safety Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Safety Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-scoovio-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety Guidelines</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-scoovio-600 rounded-full mt-2"></div>
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Support</h3>
              <p className="text-gray-600 mb-4">24/7 immediate assistance</p>
              <div className="text-2xl font-bold text-scoovio-600">1-800-SCOOVIO</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Roadside Assistance</h3>
              <p className="text-gray-600 mb-4">For scooter breakdowns or issues</p>
              <div className="text-2xl font-bold text-scoovio-600">1-800-SCOV-911</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Emergency</h3>
              <p className="text-gray-600 mb-4">For medical or safety emergencies</p>
              <div className="text-2xl font-bold text-red-600">911</div>
            </div>
          </div>
        </div>

        {/* Insurance Coverage */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Insurance Coverage</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Included Coverage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Liability insurance up to $1M</li>
                  <li>• Physical damage protection</li>
                  <li>• Theft protection</li>
                  <li>• 24/7 roadside assistance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Optional Upgrades</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium protection plan</li>
                  <li>• Zero deductible option</li>
                  <li>• Personal injury coverage</li>
                  <li>• Enhanced roadside support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}