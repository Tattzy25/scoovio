'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, HomeIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function HostPage() {
  const [earnings, setEarnings] = useState(2847)
  const [activeListings, setActiveListings] = useState(3)
  const [totalTrips, setTotalTrips] = useState(47)

  const hostBenefits = [
    {
      icon: CurrencyDollarIcon,
      title: "Earn extra income",
      description: "Turn your idle scooter into a money-making asset"
    },
    {
      icon: ShieldCheckIcon,
      title: "Comprehensive protection",
      description: "$750,000 in liability insurance and damage protection"
    },
    {
      icon: ClockIcon,
      title: "Flexible scheduling",
      description: "Choose when your scooter is available for bookings"
    },
    {
      icon: UsersIcon,
      title: "Supportive community",
      description: "Join thousands of hosts in the Scoovio community"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Los Angeles, CA",
      earnings: "$2,400/month",
      image: "/api/placeholder/100/100",
      quote: "Hosting on Scoovio has been incredible. I make enough to cover my scooter payments and then some!"
    },
    {
      name: "Mike Chen",
      location: "San Francisco, CA",
      earnings: "$1,800/month",
      image: "/api/placeholder/100/100",
      quote: "The platform is so easy to use. I just list my scooter and watch the bookings roll in."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-scoovio-600 to-scoovio-700">
        <div className="absolute inset-0">
          <Image
            src="/api/placeholder/1920/600"
            alt="Host hero background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn your scooter into income
            </h1>
            <p className="mt-6 text-xl text-scoovio-100 max-w-2xl mx-auto">
              List your scooter on Scoovio and start earning money from travelers who need reliable transportation.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/host/signup"
                className="bg-white text-scoovio-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start hosting
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <p className="text-4xl font-bold text-scoovio-600">${earnings.toLocaleString()}</p>
              <p className="mt-2 text-lg text-gray-600">Average monthly earnings</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-scoovio-600">{activeListings}</p>
              <p className="mt-2 text-lg text-gray-600">Active listings per host</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-scoovio-600">{totalTrips}</p>
              <p className="mt-2 text-lg text-gray-600">Total trips completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why host on Scoovio?</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to host with confidence</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {hostBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-scoovio-100 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-scoovio-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Success stories from our hosts</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-scoovio-600 font-semibold mt-1">{testimonial.earnings}</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-scoovio-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to start hosting?</h2>
          <p className="mt-4 text-xl text-scoovio-100 max-w-2xl mx-auto">
            Join thousands of hosts earning money with their scooters. It only takes a few minutes to get started.
          </p>
          <div className="mt-8">
            <Link
              href="/host/signup"
              className="bg-white text-scoovio-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get started today
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}