'use client'

import { useState } from 'react'
import { UserGroupIcon, ChatBubbleLeftIcon, LightBulbIcon, TrophyIcon, QuestionMarkCircleIcon, MegaphoneIcon } from '@heroicons/react/24/outline'

export default function HostCommunityPage() {
  const [activeTab, setActiveTab] = useState('discussions')

  const discussions = [
    {
      id: 1,
      title: "Best practices for winter storage?",
      author: "Sarah M.",
      replies: 23,
      lastActivity: "2 hours ago",
      category: "Maintenance"
    },
    {
      id: 2,
      title: "Pricing strategies for tourist season",
      author: "Mike R.",
      replies: 45,
      lastActivity: "5 hours ago",
      category: "Pricing"
    },
    {
      id: 3,
      title: "Dealing with last-minute cancellations",
      author: "Lisa K.",
      replies: 18,
      lastActivity: "1 day ago",
      category: "Guest Relations"
    }
  ]

  const successStories = [
    {
      title: "From 1 to 10 scooters in 6 months",
      author: "David L.",
      earnings: "$3,500/month",
      readTime: "5 min read",
      highlight: "Started with one Vespa and scaled to a fleet"
    },
    {
      title: "Perfect 5-star rating strategy",
      author: "Emma S.",
      rating: "4.9 stars",
      readTime: "3 min read",
      highlight: "Guest communication tips that work"
    }
  ]

  const categories = [
    { name: "All Discussions", count: 1247 },
    { name: "New Hosts", count: 342 },
    { name: "Maintenance", count: 523 },
    { name: "Pricing", count: 289 },
    { name: "Guest Relations", count: 456 },
    { name: "Insurance", count: 178 }
  ]

  const topContributors = [
    { name: "Alex M.", contributions: 342, avatar: "AM" },
    { name: "Sarah K.", contributions: 298, avatar: "SK" },
    { name: "Mike R.", contributions: 256, avatar: "MR" },
    { name: "Lisa D.", contributions: 201, avatar: "LD" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Host Community</h1>
          <p className="mt-2 text-lg text-gray-600">Connect, learn, and grow with fellow Scoovio hosts</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-sm text-gray-700 hover:text-gray-900"
                  >
                    <span className="flex justify-between">
                      <span>{category.name}</span>
                      <span className="text-gray-500">({category.count})</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {topContributors.map((contributor) => (
                  <div key={contributor.name} className="flex items-center">
                    <div className="w-8 h-8 bg-scoovio-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                      {contributor.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{contributor.name}</p>
                      <p className="text-xs text-gray-500">{contributor.contributions} contributions</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'discussions', label: 'Discussions', icon: ChatBubbleLeftIcon },
                    { id: 'success', label: 'Success Stories', icon: TrophyIcon },
                    { id: 'questions', label: 'Q&A', icon: QuestionMarkCircleIcon },
                    { id: 'announcements', label: 'Announcements', icon: MegaphoneIcon }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-scoovio-500 text-scoovio-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <tab.icon className="w-5 h-5 mr-2" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content based on active tab */}
              <div className="p-6">
                {activeTab === 'discussions' && (
                  <div className="space-y-4">
                    {discussions.map((discussion) => (
                      <div key={discussion.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-gray-900 mb-1">{discussion.title}</h4>
                            <div className="flex items-center text-sm text-gray-500 space-x-4">
                              <span>by {discussion.author}</span>
                              <span>{discussion.replies} replies</span>
                              <span>{discussion.lastActivity}</span>
                            </div>
                          </div>
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {discussion.category}
                          </span>
                        </div>
                      </div>
                    ))}
                    <button className="w-full mt-4 bg-scoovio-600 text-white py-2 px-4 rounded-md font-medium hover:bg-scoovio-700">
                      Start New Discussion
                    </button>
                  </div>
                )}

                {activeTab === 'success' && (
                  <div className="space-y-6">
                    {successStories.map((story, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">{story.title}</h4>
                            <p className="text-sm text-gray-500">by {story.author} • {story.readTime}</p>
                          </div>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            {story.rating || story.earnings}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{story.highlight}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'questions' && (
                  <div className="text-center py-12">
                    <QuestionMarkCircleIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Ask the Community</h3>
                    <p className="text-gray-500 mb-4">Get answers from experienced hosts</p>
                    <button className="bg-scoovio-600 text-white px-4 py-2 rounded-md font-medium hover:bg-scoovio-700">
                      Ask a Question
                    </button>
                  </div>
                )}

                {activeTab === 'announcements' && (
                  <div className="space-y-4">
                    {[
                      { title: "New Host Dashboard Features", date: "2 days ago", type: "Product Update" },
                      { title: "Updated Insurance Policy", date: "1 week ago", type: "Policy" },
                      { title: "Winter Hosting Tips", date: "2 weeks ago", type: "Tips" }
                    ].map((announcement, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-medium text-gray-900">{announcement.title}</h4>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {announcement.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{announcement.date}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}