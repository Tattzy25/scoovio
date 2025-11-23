'use client'

import { MagnifyingGlassIcon, CalendarDaysIcon, KeyIcon } from '@heroicons/react/24/outline'

export default function HowItWorks() {
  const steps = [
    {
      name: 'Search',
      description: 'Find the perfect scooter or stroller for your trip',
      icon: MagnifyingGlassIcon
    },
    {
      name: 'Book',
      description: 'Choose your dates and reserve in minutes',
      icon: CalendarDaysIcon
    },
    {
      name: 'Ride',
      description: 'Meet your host and enjoy the freedom to explore',
      icon: KeyIcon
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.name} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-scoovio-600 text-white">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{step.name}</h3>
              <p className="mt-2 text-base text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

