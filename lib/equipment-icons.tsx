import { EquipmentType } from '@prisma/client'

// Equipment type icons mapping
export const EQUIPMENT_ICONS: Record<EquipmentType, string> = {
  [EquipmentType.MOBILITY_SCOOTER]: '🛴',
  [EquipmentType.BABY_STROLLER]: '👶',
}

// Feature icons for mobility scooters
export const MOBILITY_SCOOTER_FEATURE_ICONS: Record<string, string> = {
  foldable: '📦',
  basketIncluded: '🧺',
  lightingSystem: '💡',
  adjustableSeat: '🪑',
  armrests: '🤲',
  cupHolder: '☕',
  antiTipWheels: '⚖️',
  keyIgnition: '🔑',
  speedControl: '⚡',
  reverseBeeper: '🔊',
  weatherProtection: '☔',
}

// Feature icons for baby strollers
export const BABY_STROLLER_FEATURE_ICONS: Record<string, string> = {
  reversibleSeat: '🔄',
  adjustableHandlebar: '📏',
  multiPositionRecline: '🛏️',
  fivePointHarness: '🔒',
  removableSnackTray: '🍎',
  cupHolders: '☕',
  storageBasket: '🧺',
  sunCanopy: '☂️',
  rainCover: '🌧️',
  footmuff: '🧦',
  carSeatCompatible: '🚗',
  oneHandFold: '✋',
  standingFold: '🧍',
  travelSystemReady: '✈️',
}

// Specification icons for mobility scooters
export const MOBILITY_SCOOTER_SPEC_ICONS: Record<string, string> = {
  maxSpeed: '🏃',
  range: '📏',
  maxWeight: '⚖️',
  batteryType: '🔋',
  chargingTime: '⏱️',
  wheelSize: '⚙️',
  suspensionType: '🔧',
}

// Specification icons for baby strollers
export const BABY_STROLLER_SPEC_ICONS: Record<string, string> = {
  ageRange: '👶',
  weightLimit: '⚖️',
  dimensions: '📐',
  weight: '🏋️',
  wheelType: '⚙️',
  wheelSize: '⚙️',
  seatCount: '🪑',
}

// Safety icons
export const SAFETY_ICONS: Record<string, string> = {
  helmet: '⛑️',
  seatbelt: '🔒',
  brakes: '🛑',
  lights: '💡',
  reflectors: '✨',
  horn: '📯',
  insurance: '🛡️',
  support: '📞',
}

// General equipment icons
export const GENERAL_ICONS: Record<string, string> = {
  location: '📍',
  calendar: '📅',
  price: '💰',
  rating: '⭐',
  reviews: '💬',
  host: '👤',
  verified: '✅',
  favorite: '❤️',
  share: '📤',
  message: '💬',
  booking: '📋',
  payment: '💳',
  delivery: '🚚',
  pickup: '📦',
  return: '↩️',
}

// Helper functions
export function getEquipmentIcon(type: EquipmentType): string {
  return EQUIPMENT_ICONS[type] || '❓'
}

export function getFeatureIcon(feature: string, equipmentType: EquipmentType): string {
  if (equipmentType === EquipmentType.MOBILITY_SCOOTER) {
    return MOBILITY_SCOOTER_FEATURE_ICONS[feature] || '✨'
  } else {
    return BABY_STROLLER_FEATURE_ICONS[feature] || '✨'
  }
}

export function getSpecIcon(spec: string, equipmentType: EquipmentType): string {
  if (equipmentType === EquipmentType.MOBILITY_SCOOTER) {
    return MOBILITY_SCOOTER_SPEC_ICONS[spec] || '📊'
  } else {
    return BABY_STROLLER_SPEC_ICONS[spec] || '📊'
  }
}

export function getSafetyIcon(safety: string): string {
  return SAFETY_ICONS[safety] || '🛡️'
}

export function getGeneralIcon(icon: string): string {
  return GENERAL_ICONS[icon] || '❓'
}

