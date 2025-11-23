import { EquipmentType, EquipmentStatus, Equipment, Booking, Review } from '@prisma/client'

// Base equipment interface
export interface BaseEquipment {
  id: string
  type: EquipmentType
  status: EquipmentStatus
  title: string
  description: string
  brand: string
  model: string
  year?: number
  color?: string
  dailyRate: number
  weeklyRate?: number
  monthlyRate?: number
  securityDeposit?: number
  address: string
  city: string
  state: string
  zipCode: string
  latitude?: number
  longitude?: number
  images: string[]
  available: boolean
  minRentalDays: number
  maxRentalDays?: number
  specifications: any
  features: any
  createdAt: Date
  updatedAt: Date
  hostId: string
}

// Equipment with relations
export interface EquipmentWithDetails extends BaseEquipment {
  host: {
    id: string
    businessName?: string
    user: {
      name?: string
      image?: string
    }
    responseTime?: number
    responseRate?: number
    verified: boolean
  }
  reviews: Review[]
  bookings: Booking[]
  _count: {
    reviews: number
    bookings: number
  }
}

// Mobility Scooter specific types
export interface MobilityScooterSpecs {
  maxSpeed: number // mph
  range: number // miles
  maxWeight: number // lbs
  batteryType: string
  chargingTime: number // hours
  wheelSize: number // inches
  foldable: boolean
  basketIncluded: boolean
  lightingSystem: boolean
  suspensionType?: string
}

export interface MobilityScooterFeatures {
  adjustableSeat: boolean
  armrests: boolean
  cupHolder: boolean
  antiTipWheels: boolean
  keyIgnition: boolean
  speedControl: boolean
  reverseBeeper: boolean
  weatherProtection: boolean
}

// Baby Stroller specific types
export interface BabyStrollerSpecs {
  ageRange: {
    minMonths: number
    maxMonths: number
  }
  weightLimit: number // lbs
  dimensions: {
    openLength: number // inches
    openWidth: number // inches
    openHeight: number // inches
    foldedLength: number // inches
    foldedWidth: number // inches
    foldedHeight: number // inches
  }
  weight: number // lbs of stroller itself
  wheelType: 'air-filled' | 'foam-filled' | 'solid'
  wheelSize: number // inches
  seatCount: 1 | 2 | 3
}

export interface BabyStrollerFeatures {
  reversibleSeat: boolean
  adjustableHandlebar: boolean
  multiPositionRecline: boolean
  fivePointHarness: boolean
  removableSnackTray: boolean
  cupHolders: number
  storageBasket: boolean
  sunCanopy: boolean
  rainCover: boolean
  footmuff: boolean
  carSeatCompatible: boolean
  compatibleCarSeats?: string[]
  oneHandFold: boolean
  standingFold: boolean
  travelSystemReady: boolean
}

// Equipment type configurations
export interface EquipmentTypeConfig {
  type: EquipmentType
  label: string
  pluralLabel: string
  icon: string
  description: string
  searchFilters: SearchFilter[]
  requiredSpecs: string[]
  optionalSpecs: string[]
  requiredFeatures: string[]
  optionalFeatures: string[]
  defaultMinRentalDays: number
  defaultMaxRentalDays?: number
  safetyGuidelines: string[]
  bookingRequirements: BookingRequirement[]
}

export interface SearchFilter {
  key: string
  label: string
  type: 'range' | 'select' | 'multiselect' | 'boolean'
  options?: { value: string; label: string }[]
  min?: number
  max?: number
  unit?: string
}

export interface BookingRequirement {
  key: string
  label: string
  type: 'age_verification' | 'weight_confirmation' | 'experience_level' | 'special_needs'
  required: boolean
  description: string
}

// Search and filtering types
export interface EquipmentSearchParams {
  type?: EquipmentType
  location?: string
  startDate?: string
  endDate?: string
  minPrice?: number
  maxPrice?: number
  features?: string[]
  sortBy?: 'price_low' | 'price_high' | 'rating' | 'distance' | 'newest'
  page?: number
  limit?: number
  
  // Mobility scooter specific filters
  maxSpeed?: number
  range?: number
  maxWeight?: number
  foldable?: boolean
  
  // Baby stroller specific filters
  minAge?: number
  maxAge?: number
  seatCount?: number
  carSeatCompatible?: boolean
}

export interface EquipmentSearchResult {
  equipment: EquipmentWithDetails[]
  total: number
  page: number
  limit: number
  hasMore: boolean
  filters: {
    priceRange: { min: number; max: number }
    availableFeatures: string[]
    locations: string[]
  }
}

// Booking types
export interface BookingRequest {
  equipmentId: string
  startDate: string
  endDate: string
  deliveryAddress?: string
  specialRequests?: any
  guestCount?: number
  
  // Equipment-specific requirements
  userAge?: number
  userWeight?: number
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced'
  specialNeeds?: string
}

export interface BookingCalculation {
  dailyRate: number
  totalDays: number
  subtotal: number
  serviceFee: number
  tax: number
  deliveryFee?: number
  securityDeposit?: number
  totalAmount: number
  breakdown: {
    label: string
    amount: number
  }[]
}

// Host listing types
export interface CreateEquipmentRequest {
  type: EquipmentType
  title: string
  description: string
  brand: string
  model: string
  year?: number
  color?: string
  dailyRate: number
  weeklyRate?: number
  monthlyRate?: number
  securityDeposit?: number
  address: string
  city: string
  state: string
  zipCode: string
  images: string[]
  minRentalDays: number
  maxRentalDays?: number
  specifications: MobilityScooterSpecs | BabyStrollerSpecs
  features: MobilityScooterFeatures | BabyStrollerFeatures
}

// Utility types
export type EquipmentTypeKey = keyof typeof EquipmentType
export type EquipmentStatusKey = keyof typeof EquipmentStatus

// Type guards
export function isMobilityScooter(equipment: BaseEquipment): equipment is BaseEquipment & {
  specifications: MobilityScooterSpecs
  features: MobilityScooterFeatures
} {
  return equipment.type === EquipmentType.MOBILITY_SCOOTER
}

export function isBabyStroller(equipment: BaseEquipment): equipment is BaseEquipment & {
  specifications: BabyStrollerSpecs
  features: BabyStrollerFeatures
} {
  return equipment.type === EquipmentType.BABY_STROLLER
}

