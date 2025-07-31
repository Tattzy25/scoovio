'use client'

import { MapPinIcon, ClockIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

export default function CareersPage() {
  const benefits = [
    "Flexible work arrangements",
    "Health, dental, and vision insurance",
    "401(k) with company match",
    "Unlimited PTO policy",
    "Professional development budget",
    "Stock options",
    "Home office stipend",
    "Gym membership reimbursement"
  ]

  const openPositions = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Lead the development of our core platform and scale our infrastructure to support millions of users."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Define product strategy and roadmap for our host and rider experiences."
    },
    {
      title: "Community Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Build and nurture our community of hosts and riders across multiple cities."
    },
    {
      title: "Operations Associate",
      department: "Operations",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$50k - $70k",
      description: "Support day-to-day operations and ensure smooth scooter sharing experiences."
    },
    {
      title: "Customer Support Specialist",
      department: "Support",
      location: "Remote",
      type: "Part-time",
      salary: "$20 - $30/hour",
      description: "Provide exceptional support to our hosts and riders via chat, email, and phone."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-scoovio-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-scoovio-100 max-w-3xl mx-auto">
              Help us build the future of urban mobility. We're looking for passionate people 
              who want to make cities more sustainable and connected.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Culture Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-gray-600 mb-4">
                At Scoovio, we believe in moving fast, breaking things, and learning quickly. 
                We're a remote-first company that values autonomy, ownership, and impact.
              </p>
              <p className="text-gray-600 mb-4">
                We work hard but also prioritize work-life balance. Whether you're in San Francisco, 
                Austin, or anywhere else in the world, you'll be part of a supportive team 
                that's building something meaningful.
              </p>
              <p className="text-gray-600">
                We celebrate diversity and believe that different perspectives make our product 
                stronger. We're committed to creating an inclusive environment where everyone 
                can thrive.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-400">Team Culture</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-scoovio-600 font-semibold">{benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <BriefcaseIcon className="h-4 w-4 mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{position.description}</p>
                  </div>
                  <button className="w-full sm:w-auto bg-scoovio-600 text-white px-6 py-2 rounded-md font-medium hover:bg-scoovio-700">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="bg-scoovio-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">How to Apply</h2>
          <div className="max-w-2xl mx-auto">
            <ol className="space-y-4 text-gray-600">
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-scoovio-600 text-white rounded-full flex items-center justify-center mr-3">1</span>
                <span>Browse our open positions and find one that matches your skills and interests</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-scoovio-600 text-white rounded-full flex items-center justify-center mr-3">2</span>
                <span>Click "Apply Now" and submit your resume along with a brief cover letter</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-scoovio-600 text-white rounded-full flex items-center justify-center mr-3">3</span>
                <span>Our team will review your application and reach out within 1-2 weeks</span>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-scoovio-600 text-white rounded-full flex items-center justify-center mr-3">4</span>
                <span>If selected, you'll go through 2-3 rounds of interviews</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}