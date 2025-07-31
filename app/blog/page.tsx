'use client'

import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function BlogPage() {
  const articles = [
    {
      title: "The Future of Urban Mobility: How Scooter Sharing is Changing Cities",
      excerpt: "Discover how scooter sharing platforms like Scoovio are revolutionizing urban transportation and reducing carbon emissions.",
      author: "Sarah Martinez",
      date: "March 20, 2024",
      readTime: "5 min read",
      category: "Sustainability",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Top 10 Tips for New Scooter Hosts",
      excerpt: "Learn the best practices for listing your scooter, setting competitive prices, and building a stellar reputation.",
      author: "David Chen",
      date: "March 15, 2024",
      readTime: "7 min read",
      category: "Hosting",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Safety First: Essential Gear Every Scooter Rider Needs",
      excerpt: "From helmets to reflective gear, here's everything you need to stay safe while riding a shared scooter.",
      author: "Lisa Johnson",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Safety",
      image: "/api/placeholder/600/400"
    },
    {
      title: "How to Maximize Your Earnings as a Scoovio Host",
      excerpt: "Proven strategies for optimizing your scooter listing, pricing, and availability to increase your monthly income.",
      author: "Michael Park",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Earnings",
      image: "/api/placeholder/600/400"
    },
    {
      title: "The Environmental Impact of Scooter Sharing vs. Traditional Transportation",
      excerpt: "A deep dive into how scooter sharing compares to cars, public transit, and walking in terms of environmental footprint.",
      author: "Emma Wilson",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Sustainability",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Behind the Scenes: How Scoovio Ensures Quality and Safety",
      excerpt: "Take a look at our rigorous inspection process and quality standards that keep our community safe.",
      author: "James Rodriguez",
      date: "February 25, 2024",
      readTime: "5 min read",
      category: "Quality",
      image: "/api/placeholder/600/400"
    }
  ]

  const categories = ["All", "Sustainability", "Hosting", "Safety", "Earnings", "Quality", "Technology"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-scoovio-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Scoovio Blog</h1>
            <p className="text-xl text-scoovio-100 max-w-3xl mx-auto">
              Insights, tips, and stories from the world of scooter sharing and urban mobility.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-scoovio-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-200 h-64 lg:h-full flex items-center justify-center">
                <div className="text-gray-400">Featured Image</div>
              </div>
              <div className="p-8">
                <div className="text-sm text-scoovio-600 font-medium mb-2">{articles[0].category}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{articles[0].title}</h2>
                <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">{articles[0].author}</span>
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">{articles[0].date}</span>
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{articles[0].readTime}</span>
                </div>
                <button className="bg-scoovio-600 text-white px-6 py-2 rounded-md font-medium hover:bg-scoovio-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <div className="text-gray-400">Article Image</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-scoovio-600 font-medium mb-2">{article.category}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <UserIcon className="h-3 w-3 mr-1" />
                  <span className="mr-3">{article.author}</span>
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span className="mr-3">{article.date}</span>
                </div>
                <button className="text-scoovio-600 font-medium text-sm hover:text-scoovio-700">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-scoovio-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest articles, tips, and company updates delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-scoovio-500 focus:border-scoovio-500"
            />
            <button className="bg-scoovio-600 text-white px-6 py-2 rounded-md font-medium hover:bg-scoovio-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}