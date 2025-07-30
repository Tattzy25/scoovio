'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { GlobeAltIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <GlobeAltIcon className="h-8 w-8 text-scoovio-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Scoovio</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/search" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Find cars
            </Link>
            <Link href="/host" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Become a host
            </Link>
            <Link href="/trips" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Trips
            </Link>
            <Link href="/messages" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Messages
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/host/signup" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              List your car
            </Link>
            <Link 
              href="/login"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Log in
            </Link>
            <Link 
              href="/signup"
              className="bg-scoovio-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-scoovio-700"
            >
              Sign up
            </Link>
            <button className="p-2">
              <UserCircleIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/search"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Find cars
            </Link>
            <Link
              href="/host"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Become a host
            </Link>
            <Link
              href="/trips"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Trips
            </Link>
            <Link
              href="/messages"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Messages
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}