import { EquipmentType } from '@prisma/client'
import { EquipmentTypeConfig, SearchFilter, BookingRequirement } from '@/types/equipment'

// Equipment type configurations
export const EQUIPMENT_CONFIGS: Record<EquipmentType, EquipmentTypeConfig> = {
  [EquipmentType.MOBILITY_SCOOTER]: {
    type: EquipmentType.MOBILITY_SCOOTER,
    label: 'Mobility Scooter',
    pluralLabel: 'Mobility Scooters',
    icon: '🛴',
    description: 'Electric mobility scooters for enhanced independence and mobility',
    searchFilters: [
      {
        key: 'maxSpeed',
        label: 'Max Speed',
        type: 'range',
        min: 3,
        max: 15,
        unit: 'mph'
      },
      {
        key: 'range',
        label: 'Range',
        type: 'range',
        min: 5,
        max: 50,
        unit: 'miles'
      },
      {
        key: 'maxWeight',
        label: 'Weight Capacity',
        type: 'range',
        min: 200,
        max: 500,
        unit: 'lbs'
      },
      {
        key: 'foldable',
        label: 'Foldable',
        type: 'boolean'
      },
      {
        key: 'basketIncluded',
        label: 'Storage Basket',
        type: 'boolean'
      },
      {
        key: 'lightingSystem',
        label: 'LED Lights',
        type: 'boolean'
      },
      {
        key: 'suspensionType',
        label: 'Suspension',
        type: 'select',
        options: [
          { value: 'none', label: 'No Suspension' },
          { value: 'front', label: 'Front Suspension' },
          { value: 'full', label: 'Full Suspension' }
        ]
      }
    ],
    requiredSpecs: ['maxSpeed', 'range', 'maxWeight', 'batteryType', 'chargingTime'],
    optionalSpecs: ['wheelSize', 'suspensionType'],
    requiredFeatures: ['foldable', 'basketIncluded', 'lightingSystem'],
    optionalFeatures: ['adjustableSeat', 'armrests', 'cupHolder', 'antiTipWheels', 'keyIgnition', 'speedControl', 'reverseBeeper', 'weatherProtection'],
    defaultMinRentalDays: 1,
    defaultMaxRentalDays: 30,
    safetyGuidelines: [
      'Always wear appropriate footwear when operating the scooter',
      'Check battery level before each use',
      'Do not exceed the maximum weight capacity',
      'Use caution on slopes and uneven surfaces',
      'Follow local traffic laws and regulations',
      'Ensure the scooter is properly charged before returning'
    ],
    bookingRequirements: [
      {
        key: 'age_verification',
        label: 'Age Verification',
        type: 'age_verification',
        required: true,
        description: 'Must be 18 years or older to rent a mobility scooter'
      },
      {
        key: 'weight_confirmation',
        label: 'Weight Confirmation',
        type: 'weight_confirmation',
        required: true,
        description: 'Confirm your weight is within the scooter\'s capacity'
      },
      {
        key: 'experience_level',
        label: 'Experience Level',
        type: 'experience_level',
        required: false,
        description: 'Let us know your experience with mobility scooters'
      }
    ]
  },
  
  [EquipmentType.BABY_STROLLER]: {
    type: EquipmentType.BABY_STROLLER,
    label: 'Baby Stroller',
    pluralLabel: 'Baby Strollers',
    icon: '👶',
    description: 'High-quality baby strollers for safe and comfortable travel with your little ones',
    searchFilters: [
      {
        key: 'seatCount',
        label: 'Number of Seats',
        type: 'select',
        options: [
          { value: '1', label: 'Single (1 child)' },
          { value: '2', label: 'Double (2 children)' },
          { value: '3', label: 'Triple (3 children)' }
        ]
      },
      {
        key: 'minAge',
        label: 'Minimum Age',
        type: 'range',
        min: 0,
        max: 36,
        unit: 'months'
      },
      {
        key: 'maxAge',
        label: 'Maximum Age',
        type: 'range',
        min: 6,
        max: 60,
        unit: 'months'
      },
      {
        key: 'weightLimit',
        label: 'Weight Limit',
        type: 'range',
        min: 15,
        max: 100,
        unit: 'lbs'
      },
      {
        key: 'carSeatCompatible',
        label: 'Car Seat Compatible',
        type: 'boolean'
      },
      {
        key: 'oneHandFold',
        label: 'One-Hand Fold',
        type: 'boolean'
      },
      {
        key: 'reversibleSeat',
        label: 'Reversible Seat',
        type: 'boolean'
      },
      {
        key: 'wheelType',
        label: 'Wheel Type',
        type: 'select',
        options: [
          { value: 'air-filled', label: 'Air-Filled' },
          { value: 'foam-filled', label: 'Foam-Filled' },
          { value: 'solid', label: 'Solid' }
        ]
      }
    ],
    requiredSpecs: ['ageRange', 'weightLimit', 'dimensions', 'weight', 'wheelType', 'seatCount'],
    optionalSpecs: ['wheelSize'],
    requiredFeatures: ['fivePointHarness', 'oneHandFold', 'sunCanopy'],
    optionalFeatures: ['reversibleSeat', 'adjustableHandlebar', 'multiPositionRecline', 'removableSnackTray', 'cupHolders', 'storageBasket', 'rainCover', 'footmuff', 'carSeatCompatible', 'standingFold', 'travelSystemReady'],
    defaultMinRentalDays: 1,
    defaultMaxRentalDays: 60,
    safetyGuidelines: [
      'Always use the 5-point harness system',
      'Check that all locks and brakes are functioning before use',
      'Never leave your child unattended in the stroller',
      'Ensure the stroller is appropriate for your child\'s age and weight',
      'Use the parking brake when stationary',
      'Clean and sanitize the stroller before and after use',
      'Check for any damage or wear before each use'
    ],
    bookingRequirements: [
      {
        key: 'age_verification',
        label: 'Child Age Verification',
        type: 'age_verification',
        required: true,
        description: 'Confirm your child\'s age is within the stroller\'s range'
      },
      {
        key: 'weight_confirmation',
        label: 'Child Weight Confirmation',
        type: 'weight_confirmation',
        required: true,
        description: 'Confirm your child\'s weight is within the stroller\'s limit'
      },
      {
        key: 'special_needs',
        label: 'Special Requirements',
        type: 'special_needs',
        required: false,
        description: 'Any special requirements or accommodations needed'
      }
    ]
  }
}

// Helper functions
export function getEquipmentConfig(type: EquipmentType): EquipmentTypeConfig {
  return EQUIPMENT_CONFIGS[type]
}

export function getAllEquipmentTypes(): EquipmentType[] {
  return Object.values(EquipmentType)
}

export function getEquipmentTypeLabel(type: EquipmentType, plural = false): string {
  const config = getEquipmentConfig(type)
  return plural ? config.pluralLabel : config.label
}

export function getEquipmentTypeIcon(type: EquipmentType): string {
  return getEquipmentConfig(type).icon
}

export function getSearchFilters(type: EquipmentType): SearchFilter[] {
  return getEquipmentConfig(type).searchFilters
}

export function getSafetyGuidelines(type: EquipmentType): string[] {
  return getEquipmentConfig(type).safetyGuidelines
}

export function getBookingRequirements(type: EquipmentType): BookingRequirement[] {
  return getEquipmentConfig(type).bookingRequirements
}

// Validation helpers
export function validateEquipmentSpecs(type: EquipmentType, specs: any): { valid: boolean; errors: string[] } {
  const config = getEquipmentConfig(type)
  const errors: string[] = []
  
  // Check required specs
  for (const requiredSpec of config.requiredSpecs) {
    if (!specs[requiredSpec]) {
      errors.push(`${requiredSpec} is required for ${config.label}`)
    }
  }
  
  // Type-specific validations
  if (type === EquipmentType.MOBILITY_SCOOTER) {
    if (specs.maxSpeed && (specs.maxSpeed < 1 || specs.maxSpeed > 25)) {
      errors.push('Max speed must be between 1 and 25 mph')
    }
    if (specs.range && (specs.range < 1 || specs.range > 100)) {
      errors.push('Range must be between 1 and 100 miles')
    }
    if (specs.maxWeight && (specs.maxWeight < 100 || specs.maxWeight > 1000)) {
      errors.push('Weight capacity must be between 100 and 1000 lbs')
    }
  }
  
  if (type === EquipmentType.BABY_STROLLER) {
    if (specs.ageRange) {
      if (specs.ageRange.minMonths < 0 || specs.ageRange.minMonths > 60) {
        errors.push('Minimum age must be between 0 and 60 months')
      }
      if (specs.ageRange.maxMonths < specs.ageRange.minMonths || specs.ageRange.maxMonths > 72) {
        errors.push('Maximum age must be greater than minimum age and less than 72 months')
      }
    }
    if (specs.weightLimit && (specs.weightLimit < 10 || specs.weightLimit > 150)) {
      errors.push('Weight limit must be between 10 and 150 lbs')
    }
    if (specs.seatCount && (specs.seatCount < 1 || specs.seatCount > 4)) {
      errors.push('Seat count must be between 1 and 4')
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}

export function validateEquipmentFeatures(type: EquipmentType, features: any): { valid: boolean; errors: string[] } {
  const config = getEquipmentConfig(type)
  const errors: string[] = []
  
  // Check required features
  for (const requiredFeature of config.requiredFeatures) {
    if (features[requiredFeature] === undefined) {
      errors.push(`${requiredFeature} is required for ${config.label}`)
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}

