'use client'

import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: "Phone Support",
      description: "Speak with our support team",
      details: "(555) 123-SCOOV",
      hours: "24/7 for urgent issues"
    },
    {
      icon: EnvelopeIcon,
      title: "Email Support",
      description: "Get help via email",
      details: "support@scoovio.com",
      hours: "Response within 24 hours"
    },
    {
      icon: MapPinIcon,
      title: "Office Address",
      description: "Visit us in person",
      details: "123 Innovation Drive, San Francisco, CA 94105",
      hours: "Mon-Fri 9AM-6PM PST"
    }
  ]

  const faqs = [
    {
      question: "How do I become a host?",
      answer: "Sign up for an account, complete the host verification process, and list your scooter. Our team will review your listing within 24 hours."
    },
    {
      question: "What if I have an issue with a rental?",
      answer: "Contact our 24/7 support team immediately. We have a dedicated team to handle any issues that arise during rentals."
    },
    {
      question: "How do I get paid as a host?",
      answer: "Payments are processed automatically after each completed rental. You can choose to receive payouts daily, weekly, or monthly."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-scoovio-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-scoovio-100 max-w-3xl mx-auto">
              We're here to help. Get in touch with our support team or visit our office.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-scoovio-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-6 w-6 text-scoovio-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                <p className="text-scoovio-600 font-medium mb-1">{method.details}</p>
                <p className="text-gray-500 text-sm">{method.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-scoovio-500 focus:border-scoovio-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-scoovio-500 focus:border-scoovio-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-scoovio-500 focus:border-scoovio-500"
                >
                  <option value="">Select a topic</option>
                  <option value="hosting">Hosting Questions</option>
                  <option value="renting">Rental Questions</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership Inquiries</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-scoovio-500 focus:border-scoovio-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-scoovio-600 text-white py-2 px-4 rounded-md font-medium hover:bg-scoovio-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="/help" className="text-scoovio-600 font-medium hover:text-scoovio-700">
                View all FAQs →
              </a>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-16 bg-scoovio-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Office Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-gray-600">24/7 via phone and email</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Office Visits</h3>
              <p className="text-gray-600">Monday - Friday, 9AM - 6PM PST</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">Within 24 hours for all inquiries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}