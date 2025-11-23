'use client'

import { EquipmentType } from '@prisma/client'
import { getEquipmentTypeIcon, getEquipmentTypeLabel } from '@/lib/equipment-types'

interface CategoryBadgeProps {
  type: EquipmentType
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'solid'
  showIcon?: boolean
  showLabel?: boolean
  className?: string
}

export default function CategoryBadge({
  type,
  size = 'md',
  variant = 'default',
  showIcon = true,
  showLabel = true,
  className = ''
}: CategoryBadgeProps) {
  const icon = getEquipmentTypeIcon(type)
  const label = getEquipmentTypeLabel(type)
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-300 text-gray-700 bg-white',
    solid: type === EquipmentType.MOBILITY_SCOOTER 
      ? 'bg-blue-100 text-blue-800' 
      : 'bg-pink-100 text-pink-800'
  }
  
  return (
    <span 
      className={`
        inline-flex items-center rounded-full font-medium
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {showIcon && <span className={showLabel ? 'mr-1' : ''}>{icon}</span>}
      {showLabel && label}
    </span>
  )
}

