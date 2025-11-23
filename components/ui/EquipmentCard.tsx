'use client'

import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { EquipmentType } from '@prisma/client'
import { EquipmentWithDetails } from '@/types/equipment'
import { getEquipmentTypeIcon } from '@/lib/equipment-types'
import { useState } from 'react'

interface EquipmentCardProps {
  equipment: EquipmentWithDetails
  onFavoriteToggle?: (equipmentId: string, isFavorited: boolean) => void
  isFavorited?: boolean
  showType?: boolean
  className?: string
}

export default function EquipmentCard({ 
  equipment, 
  onFavoriteToggle, 
  isFavorited = false,
  showType = true,
  className = ''
}: EquipmentCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const avgRating = equipment.reviews.length > 0
    ? equipment.reviews.reduce((sum, review) => sum + review.rating, 0) / equipment.reviews.length
    : 0

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!onFavoriteToggle) return
    
    setIsLoading(true)
    try {
      await onFavoriteToggle(equipment.id, !isFavorited)
    } finally {
      setIsLoading(false)
    }
  }

  const getTypeLabel = (type: EquipmentType) => {
    return type === EquipmentType.MOBILITY_SCOOTER ? 'Scooter' : 'Stroller'
  }

  const getFeaturesList = () => {
    const features = equipment.features as any
    if (!features) return []
    
    // Extract key features based on equipment type
    if (equipment.type === EquipmentType.MOBILITY_SCOOTER) {
      const keyFeatures = []
      if (features.foldable) keyFeatures.push('Foldable')
      if (features.basketIncluded) keyFeatures.push('Storage Basket')
      if (features.lightingSystem) keyFeatures.push('LED Lights')
      if (features.weatherProtection) keyFeatures.push('Weather Protection')
      return keyFeatures
    } else {
      const keyFeatures = []
      if (features.reversibleSeat) keyFeatures.push('Reversible Seat')
      if (features.carSeatCompatible) keyFeatures.push('Car Seat Compatible')
      if (features.oneHandFold) keyFeatures.push('One-Hand Fold')
      if (features.storageBasket) keyFeatures.push('Large Storage')
      return keyFeatures
    }
  }

  const keyFeatures = getFeaturesList()

  return (
    <Link href={`/equipment/${equipment.id}`} className={`block ${className}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
        <div className="relative">
          <Image
            src={equipment.images[0] || '/api/placeholder/300/200'}
            alt={`${equipment.brand} ${equipment.model}`}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          
          {/* Favorite Button */}
          <button 
            onClick={handleFavoriteClick}
            disabled={isLoading}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            {isFavorited ? (
              <HeartIconSolid className="h-5 w-5 text-red-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
          
          {/* Equipment Type Badge */}
          {showType && (
            <div className="absolute top-2 left-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
                <span className="mr-1">{getEquipmentTypeIcon(equipment.type)}</span>
                {getTypeLabel(equipment.type)}
              </span>
            </div>
          )}
          
          {/* Availability Badge */}
          {!equipment.available && (
            <div className="absolute bottom-2 left-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Unavailable
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {equipment.year ? `${equipment.year} ` : ''}{equipment.brand} {equipment.model}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{equipment.city}, {equipment.state}</p>
            </div>
          </div>
          
          {/* Host Info */}
          <div className="mt-2 flex items-center">
            <div className="flex-shrink-0">
              {equipment.host.user.image ? (
                <Image
                  src={equipment.host.user.image}
                  alt={equipment.host.user.name || 'Host'}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              ) : (
                <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600">
                    {equipment.host.user.name?.charAt(0) || 'H'}
                  </span>
                </div>
              )}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {equipment.host.user.name || 'Host'}
              {equipment.host.verified && (
                <span className="ml-1 text-blue-500">✓</span>
              )}
            </span>
          </div>
          
          {/* Key Features */}
          {keyFeatures.length > 0 && (
            <div className="mt-3">
              <div className="flex flex-wrap gap-1">
                {keyFeatures.slice(0, 2).map((feature, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {feature}
                  </span>
                ))}
                {keyFeatures.length > 2 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    +{keyFeatures.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          {/* Rating and Price */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {avgRating > 0 ? avgRating.toFixed(1) : 'New'} 
                {equipment._count.reviews > 0 && (
                  <span className="text-gray-400"> ({equipment._count.reviews})</span>
                )}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-gray-900">${equipment.dailyRate}</span>
              <span className="text-sm text-gray-600">/day</span>
            </div>
          </div>
          
          {/* Weekly/Monthly Rates */}
          {(equipment.weeklyRate || equipment.monthlyRate) && (
            <div className="mt-1 text-right">
              {equipment.weeklyRate && (
                <span className="text-xs text-gray-500">
                  ${equipment.weeklyRate}/week
                </span>
              )}
              {equipment.weeklyRate && equipment.monthlyRate && (
                <span className="text-xs text-gray-400 mx-1">•</span>
              )}
              {equipment.monthlyRate && (
                <span className="text-xs text-gray-500">
                  ${equipment.monthlyRate}/month
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

