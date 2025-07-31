'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, PaperAirplaneIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [newMessage, setNewMessage] = useState('')

  const conversations = [
    {
      id: 1,
      host: {
        name: 'Alex Rivera',
        avatar: '/api/placeholder/50/50',
        isOnline: true
      },
      scooter: {
        make: 'Vespa',
        model: 'Primavera',
        year: 2023
      },
      lastMessage: 'Perfect! See you at 2 PM tomorrow for pickup.',
      lastMessageTime: '2 hours ago',
      unread: 2,
      tripId: 1
    },
    {
      id: 2,
      host: {
        name: 'Sarah Chen',
        avatar: '/api/placeholder/50/50',
        isOnline: false
      },
      scooter: {
        make: 'Honda',
        model: 'PCX',
        year: 2023
      },
      lastMessage: 'Thanks for booking! The scooter will be ready for you.',
      lastMessageTime: '1 day ago',
      unread: 0,
      tripId: 2
    },
    {
      id: 3,
      host: {
        name: 'Mike Johnson',
        avatar: '/api/placeholder/50/50',
        isOnline: true
      },
      scooter: {
        make: 'Yamaha',
        model: 'AeroX',
        year: 2022
      },
      lastMessage: 'Hope you enjoyed the scooter!',
      lastMessageTime: '3 days ago',
      unread: 0,
      tripId: 3
    }
  ]

  const currentConversation = conversations.find(c => c.id === selectedConversation)

  const messages = [
    {
      id: 1,
      sender: 'host',
      text: 'Hi! Thanks for booking my Vespa Primavera. Looking forward to hosting you!',
      time: '2024-01-12 10:30 AM'
    },
    {
      id: 2,
      sender: 'guest',
      text: 'Hi Alex! I\'m excited to rent your scooter. Quick question - what\'s the best place to meet for pickup?',
      time: '2024-01-12 10:45 AM'
    },
    {
      id: 3,
      sender: 'host',
      text: 'I usually meet guests at the Starbucks on Main Street. It\'s easy to find and has parking. Does 2 PM tomorrow work for you?',
      time: '2024-01-12 11:00 AM'
    },
    {
      id: 4,
      sender: 'guest',
      text: 'That sounds perfect! 2 PM at Starbucks on Main Street works great for me.',
      time: '2024-01-12 11:15 AM'
    },
    {
      id: 5,
      sender: 'host',
      text: 'Perfect! See you at 2 PM tomorrow for pickup.',
      time: '2024-01-12 11:30 AM'
    }
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', newMessage)
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="mt-2 text-gray-600">Communicate with your hosts and guests</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 h-screen max-h-screen">
            {/* Conversations List */}
            <div className="border-r border-gray-200 overflow-y-auto">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                  />
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`w-full p-4 hover:bg-gray-50 text-left ${
                      selectedConversation === conversation.id ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <Image
                          src={conversation.host.avatar}
                          alt={conversation.host.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        {conversation.host.isOnline && (
                          <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {conversation.host.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {conversation.scooter.year} {conversation.scooter.make} {conversation.scooter.model}
                            </p>
                          </div>
                          {conversation.unread > 0 && (
                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-scoovio-600 rounded-full">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate mt-1">
                          {conversation.lastMessage}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {conversation.lastMessageTime}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Thread */}
            <div className="lg:col-span-2 flex flex-col">
              {currentConversation ? (
                <>
                  {/* Header */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Image
                          src={currentConversation.host.avatar}
                          alt={currentConversation.host.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        {currentConversation.host.isOnline && (
                          <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {currentConversation.host.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {currentConversation.host.isOnline ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === 'guest' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.sender === 'guest'
                              ? 'bg-scoovio-600 text-white'
                              : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'guest' ? 'text-scoovio-100' : 'text-gray-500'
                          }`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type a message..."
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-scoovio-500"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-scoovio-600 hover:bg-scoovio-700"
                        aria-label="Send message"
                      >
                        <PaperAirplaneIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500">Select a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}