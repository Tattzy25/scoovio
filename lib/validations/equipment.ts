import { z } from 'zod'
import { EquipmentType, EquipmentStatus } from '@prisma/client'

// Base equipment validation schema
export const baseEquipmentSchema = z.object({
  type: z.nativeEnum(EquipmentType),
  title: z.string().min(5, 'Title must be at least 5 characters').max(100, 'Title must be less than 100 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters').max(2000, 'Description must be less than 2000 characters'),
  brand: z.string().min(1, 'Brand is required').max(50, 'Brand must be less than 50 characters'),
  model: z.string().min(1, 'Model is required').max(50, 'Model must be less than 50 characters'),
  year: z.number().int().min(1990).max(new Date().getFullYear() + 1).optional(),
  color: z.string().max(30, 'Color must be less than 30 characters').optional(),
  dailyRate: z.number().min(5, 'Daily rate must be at least $5').max(1000, 'Daily rate must be less than $1000'),
  weeklyRate: z.number().min(20, 'Weekly rate must be at least $20').max(5000, 'Weekly rate must be less than $5000').optional(),
  monthlyRate: z.number().min(50, 'Monthly rate must be at least $50').max(15000, 'Monthly rate must be less than $15000').optional(),
  securityDeposit: z.number().min(0, 'Security deposit cannot be negative').max(2000, 'Security deposit must be less than $2000').optional(),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(2, 'State is required').max(2, 'State must be 2 characters'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format'),
  images: z.array(z.string().url('Invalid image URL')).min(1, 'At least one image is required').max(10, 'Maximum 10 images allowed'),
  minRentalDays: z.number().int().min(1, 'Minimum rental days must be at least 1').max(30, 'Minimum rental days must be less than 30'),
  maxRentalDays: z.number().int().min(1, 'Maximum rental days must be at least 1').max(365, 'Maximum rental days must be less than 365').optional(),
})

// Mobility Scooter specifications schema
export const mobilityScooterSpecsSchema = z.object({
  maxSpeed: z.number().min(1, 'Max speed must be at least 1 mph').max(25, 'Max speed must be less than 25 mph'),
  range: z.number().min(1, 'Range must be at least 1 mile').max(100, 'Range must be less than 100 miles'),
  maxWeight: z.number().min(100, 'Weight capacity must be at least 100 lbs').max(1000, 'Weight capacity must be less than 1000 lbs'),
  batteryType: z.string().min(1, 'Battery type is required'),
  chargingTime: z.number().min(0.5, 'Charging time must be at least 0.5 hours').max(24, 'Charging time must be less than 24 hours'),
  wheelSize: z.number().min(6, 'Wheel size must be at least 6 inches').max(20, 'Wheel size must be less than 20 inches').optional(),
  foldable: z.boolean(),
  basketIncluded: z.boolean(),
  lightingSystem: z.boolean(),
  suspensionType: z.enum(['none', 'front', 'full']).optional(),
})

// Mobility Scooter features schema
export const mobilityScooterFeaturesSchema = z.object({
  adjustableSeat: z.boolean(),
  armrests: z.boolean(),
  cupHolder: z.boolean(),
  antiTipWheels: z.boolean(),
  keyIgnition: z.boolean(),
  speedControl: z.boolean(),
  reverseBeeper: z.boolean(),
  weatherProtection: z.boolean(),
})

// Baby Stroller specifications schema
export const babyStrollerSpecsSchema = z.object({
  ageRange: z.object({
    minMonths: z.number().int().min(0, 'Minimum age cannot be negative').max(60, 'Minimum age must be less than 60 months'),
    maxMonths: z.number().int().min(6, 'Maximum age must be at least 6 months').max(72, 'Maximum age must be less than 72 months'),
  }).refine(data => data.maxMonths > data.minMonths, {
    message: 'Maximum age must be greater than minimum age',
    path: ['maxMonths']
  }),
  weightLimit: z.number().min(10, 'Weight limit must be at least 10 lbs').max(150, 'Weight limit must be less than 150 lbs'),
  dimensions: z.object({
    openLength: z.number().min(20, 'Open length must be at least 20 inches').max(60, 'Open length must be less than 60 inches'),
    openWidth: z.number().min(15, 'Open width must be at least 15 inches').max(40, 'Open width must be less than 40 inches'),
    openHeight: z.number().min(30, 'Open height must be at least 30 inches').max(50, 'Open height must be less than 50 inches'),
    foldedLength: z.number().min(15, 'Folded length must be at least 15 inches').max(40, 'Folded length must be less than 40 inches'),
    foldedWidth: z.number().min(10, 'Folded width must be at least 10 inches').max(30, 'Folded width must be less than 30 inches'),
    foldedHeight: z.number().min(10, 'Folded height must be at least 10 inches').max(30, 'Folded height must be less than 30 inches'),
  }),
  weight: z.number().min(5, 'Stroller weight must be at least 5 lbs').max(50, 'Stroller weight must be less than 50 lbs'),
  wheelType: z.enum(['air-filled', 'foam-filled', 'solid']),
  wheelSize: z.number().min(4, 'Wheel size must be at least 4 inches').max(16, 'Wheel size must be less than 16 inches').optional(),
  seatCount: z.number().int().min(1, 'Seat count must be at least 1').max(4, 'Seat count must be less than 4'),
})

// Baby Stroller features schema
export const babyStrollerFeaturesSchema = z.object({
  reversibleSeat: z.boolean(),
  adjustableHandlebar: z.boolean(),
  multiPositionRecline: z.boolean(),
  fivePointHarness: z.boolean(),
  removableSnackTray: z.boolean(),
  cupHolders: z.number().int().min(0, 'Cup holders cannot be negative').max(4, 'Cup holders must be less than 4'),
  storageBasket: z.boolean(),
  sunCanopy: z.boolean(),
  rainCover: z.boolean(),
  footmuff: z.boolean(),
  carSeatCompatible: z.boolean(),
  compatibleCarSeats: z.array(z.string()).optional(),
  oneHandFold: z.boolean(),
  standingFold: z.boolean(),
  travelSystemReady: z.boolean(),
})

// Combined equipment schemas
export const mobilityScooterSchema = baseEquipmentSchema.extend({
  type: z.literal(EquipmentType.MOBILITY_SCOOTER),
  specifications: mobilityScooterSpecsSchema,
  features: mobilityScooterFeaturesSchema,
})

export const babyStrollerSchema = baseEquipmentSchema.extend({
  type: z.literal(EquipmentType.BABY_STROLLER),
  specifications: babyStrollerSpecsSchema,
  features: babyStrollerFeaturesSchema,
})

// Union schema for all equipment types
export const equipmentSchema = z.discriminatedUnion('type', [
  mobilityScooterSchema,
  babyStrollerSchema,
])

// Search parameters schema
export const equipmentSearchSchema = z.object({
  type: z.nativeEnum(EquipmentType).optional(),
  location: z.string().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  features: z.array(z.string()).optional(),
  sortBy: z.enum(['price_low', 'price_high', 'rating', 'distance', 'newest']).optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).max(50).optional(),
  
  // Mobility scooter specific filters
  maxSpeed: z.number().min(1).max(25).optional(),
  range: z.number().min(1).max(100).optional(),
  maxWeight: z.number().min(100).max(1000).optional(),
  foldable: z.boolean().optional(),
  
  // Baby stroller specific filters
  minAge: z.number().int().min(0).max(60).optional(),
  maxAge: z.number().int().min(6).max(72).optional(),
  seatCount: z.number().int().min(1).max(4).optional(),
  carSeatCompatible: z.boolean().optional(),
})

// Booking request schema
export const bookingRequestSchema = z.object({
  equipmentId: z.string().cuid('Invalid equipment ID'),
  startDate: z.string().datetime('Invalid start date'),
  endDate: z.string().datetime('Invalid end date'),
  deliveryAddress: z.string().optional(),
  specialRequests: z.any().optional(),
  guestCount: z.number().int().min(1).max(10).optional(),
  
  // Equipment-specific requirements
  userAge: z.number().int().min(0).max(120).optional(),
  userWeight: z.number().min(0).max(500).optional(),
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  specialNeeds: z.string().max(500).optional(),
}).refine(data => {
  const start = new Date(data.startDate)
  const end = new Date(data.endDate)
  return end > start
}, {
  message: 'End date must be after start date',
  path: ['endDate']
}).refine(data => {
  const start = new Date(data.startDate)
  const now = new Date()
  return start >= now
}, {
  message: 'Start date must be in the future',
  path: ['startDate']
})

// Update equipment schema
export const updateEquipmentSchema = baseEquipmentSchema.partial().extend({
  id: z.string().cuid('Invalid equipment ID'),
  status: z.nativeEnum(EquipmentStatus).optional(),
})

// Equipment availability schema
export const unavailableDateSchema = z.object({
  equipmentId: z.string().cuid('Invalid equipment ID'),
  startDate: z.string().datetime('Invalid start date'),
  endDate: z.string().datetime('Invalid end date'),
  reason: z.string().max(100).optional(),
}).refine(data => {
  const start = new Date(data.startDate)
  const end = new Date(data.endDate)
  return end > start
}, {
  message: 'End date must be after start date',
  path: ['endDate']
})

// Review schema
export const reviewSchema = z.object({
  equipmentId: z.string().cuid('Invalid equipment ID'),
  bookingId: z.string().cuid('Invalid booking ID').optional(),
  rating: z.number().int().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
  comment: z.string().max(1000, 'Comment must be less than 1000 characters').optional(),
  cleanliness: z.number().int().min(1).max(5).optional(),
  accuracy: z.number().int().min(1).max(5).optional(),
  condition: z.number().int().min(1).max(5).optional(),
  communication: z.number().int().min(1).max(5).optional(),
})

// Export types
export type BaseEquipmentInput = z.infer<typeof baseEquipmentSchema>
export type MobilityScooterInput = z.infer<typeof mobilityScooterSchema>
export type BabyStrollerInput = z.infer<typeof babyStrollerSchema>
export type EquipmentInput = z.infer<typeof equipmentSchema>
export type EquipmentSearchInput = z.infer<typeof equipmentSearchSchema>
export type BookingRequestInput = z.infer<typeof bookingRequestSchema>
export type UpdateEquipmentInput = z.infer<typeof updateEquipmentSchema>
export type UnavailableDateInput = z.infer<typeof unavailableDateSchema>
export type ReviewInput = z.infer<typeof reviewSchema>

