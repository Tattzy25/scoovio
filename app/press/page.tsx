'use client'

import { ArrowDownTrayIcon, LinkIcon } from '@heroicons/react/24/outline'

export default function PressPage() {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Scoovio Raises $25M Series B to Expand Nationwide",
      summary: "Funding will accelerate growth in 15 new cities and enhance platform features for hosts and riders.",
      link: "/press/scoovio-series-b"
    },
    {
      date: "February 8, 2024",
      title: "Scoovio Launches Host Protection Program",
      summary: "Comprehensive insurance coverage and 24/7 support for all scooter hosts on the platform.",
      link: "/press/host-protection-program"
    },
    {
      date: "January 20, 2024",
      title: "Scoovio Reaches 50,000 Active Users Milestone",
      summary: "Rapid growth demonstrates strong demand for sustainable urban mobility solutions.",
      link: "/press/50000-users-milestone"
    },
    {
      date: "December 12, 2023",
      title: "Scoovio Expands to 10 New Cities",
      summary: "Platform now available in Austin, Denver, Portland, and seven other major metropolitan areas.",
      link: "/press/expansion-10-cities"
    }
  ]

  const mediaAssets = [
    {
      title: "Company Logo",
      description: "High-resolution Scoovio logo in various formats",
      formats: ["PNG", "SVG", "EPS"]
    },
    {
      title: "Product Screenshots",
      description: "App and web platform screenshots for media use",
      formats: ["PNG", "JPG"]
    },
    {
      title: "Team Photos",
      description: "Executive team and company photos",
      formats: ["JPG", "PNG"]
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      formats: ["PDF"]
    }
  ]

  const mediaContacts = [
    {
      name: "Sarah Martinez",
      title: "Head of Communications",
      email: "press@scoovio.com",
      phone: "(555) 123-4567"
    },
    {
      name: "Mike Johnson",
      title: "PR Manager",
      email: "media@scoovio.com",
      phone: "(555) 987-6543"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-scoovio-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Press & Media</h1>
            <p className="text-xl text-scoovio-100 max-w-3xl mx-auto">
              Latest news, press releases, and media resources for journalists and content creators.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Stats */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Company at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-scoovio-600">2023</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-scoovio-600">25</div>
                <div className="text-gray-600">Cities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-scoovio-600">50k+</div>
                <div className="text-gray-600">Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-scoovio-600">2.5k+</div>
                <div className="text-gray-600">Hosts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-gray-500">{release.date}</span>
                  <LinkIcon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.summary}</p>
                <a href={release.link} className="text-scoovio-600 font-medium hover:text-scoovio-700">
                  Read full article →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Media Assets */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaAssets.map((asset, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{asset.title}</h3>
                <p className="text-gray-600 mb-4">{asset.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {asset.formats.map((format, formatIndex) => (
                    <span key={formatIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                      {format}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-scoovio-600 font-medium hover:text-scoovio-700">
                  <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-scoovio-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Media Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaContacts.map((contact, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.name}</h3>
                <p className="text-gray-600 mb-2">{contact.title}</p>
                <a href={`mailto:${contact.email}`} className="text-scoovio-600 hover:text-scoovio-700 block">
                  {contact.email}
                </a>
                <a href={`tel:${contact.phone}`} className="text-scoovio-600 hover:text-scoovio-700 block">
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}