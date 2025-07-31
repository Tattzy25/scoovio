'use client'

import { GlobeAltIcon, UsersIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  const values = [
    {
      icon: GlobeAltIcon,
      title: "Accessible Mobility",
      description: "Making sustainable urban transportation available to everyone, everywhere."
    },
    {
      icon: UsersIcon,
      title: "Community First",
      description: "Building strong local communities through shared mobility and trust."
    },
    {
      icon: ShieldCheckIcon,
      title: "Safety & Trust",
      description: "Ensuring every ride is safe, secure, and backed by comprehensive protection."
    },
    {
      icon: HeartIcon,
      title: "Sustainable Future",
      description: "Reducing carbon emissions and creating cleaner cities for future generations."
    }
  ]

  const stats = [
    { number: "50,000+", label: "Happy Riders" },
    { number: "2,500+", label: "Trusted Hosts" },
    { number: "25", label: "Cities Served" },
    { number: "4.8★", label: "Average Rating" }
  ]

  const team = [
    { name: "Alex Chen", role: "Founder & CEO", image: "AC" },
    { name: "Sarah Miller", role: "Head of Operations", image: "SM" },
    { name: "David Park", role: "Tech Lead", image: "DP" },
    { name: "Lisa Johnson", role: "Community Manager", image: "LJ" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-scoovio-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">About Scoovio</h1>
            <p className="text-xl text-scoovio-100 max-w-3xl mx-auto">
              We're on a mission to revolutionize urban mobility by making scooter sharing 
              accessible, affordable, and sustainable for everyone.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Scoovio was born from a simple observation: millions of scooters sit unused 
                in garages while people struggle to find affordable, convenient transportation. 
                We believed there had to be a better way.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2023, we started as a small team with a big vision: to create 
                a trusted platform where scooter owners could share their vehicles with 
                responsible riders, creating a win-win for everyone involved.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of hosts and riders across the country, 
                building stronger communities and cleaner cities one ride at a time.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-400">Our Journey</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-scoovio-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-scoovio-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-scoovio-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">{member.image}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-scoovio-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're looking to share your scooter or find affordable transportation, 
            be part of the movement that's changing urban mobility for the better.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-scoovio-600 text-white px-6 py-3 rounded-md font-medium hover:bg-scoovio-700">
              Become a Host
            </button>
            <button className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50">
              Find a Scooter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}