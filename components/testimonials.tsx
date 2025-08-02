'use client'

import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex R.',
      role: 'Rider in Orlando',
      image: '/api/placeholder/64/64',
      quote: 'Scoovio made our family vacation effortless. Booking was a breeze and the scooter was perfect.'
    },
    {
      name: 'Maria L.',
      role: 'Host in Miami',
      image: '/api/placeholder/64/64',
      quote: 'I earn extra income every month by sharing my scooters. The platform is simple and secure.'
    }
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Trusted by riders and hosts</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">"{t.quote}"</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

