export interface OwlImages {
  hero: string
  portrait: string
  habitat: string
}

export interface PhysicalMeasurement {
  min: number
  max: number
  unit: string
}

export interface Lifespan {
  wild: string
  captivity: string
}

export interface PhysicalCharacteristics {
  height: PhysicalMeasurement
  wingspan: PhysicalMeasurement
  weight: PhysicalMeasurement
  lifespan: Lifespan
  distinctiveFeatures: string[]
  sexualDimorphism: string
}

export interface Habitat {
  geographicRange: string
  preferredEnvironments: string[]
  nestingLocations: string[]
  territorySize: string
  altitudeRange: string
}

export interface Vocalization {
  type: string
  description: string
  purpose: string
}

export interface BreedingBehavior {
  matingSystem: string
  breedingSeason: string
  nestingPeriod: string
  eggCount: string
  incubationPeriod: string
  fledgingPeriod: string
}

export interface Behavior {
  activityPattern: string
  peakHuntingTimes: string[]
  socialBehavior: string
  territorialBehavior: string
  vocalizations: Vocalization[]
  flightPattern: string
  huntingMethods: string[]
  breedingBehavior: BreedingBehavior
  migration?: string // Optional for non-migratory species
}

export interface FeedingHabits {
  consumptionMethod: string
  dailyConsumption: string
  regurgitation: string
}

export interface Diet {
  dietType: string
  primaryPrey: string[]
  preySize: string
  huntingTechniques: string[]
  feedingHabits: FeedingHabits
}

export interface Conservation {
  status: string
  populationTrend: string
  threats: string[]
  protectionStatus: string
}

export interface Owl {
  id: string
  commonName: string
  scientificName: string
  description: string
  images: OwlImages
  physicalCharacteristics: PhysicalCharacteristics
  habitat: Habitat
  behavior: Behavior
  diet: Diet
  conservation: Conservation
  facts: string[]
}

export interface OwlDataMetadata {
  version: string
  lastUpdated: string
  totalSpecies: number
  dataSource: string
  imageCredits: string
}

export interface OwlData {
  owls: Owl[]
  metadata: OwlDataMetadata
}

// Utility types for filtering and searching
export type OwlSize = 'small' | 'medium' | 'large'
export type ActivityPattern = 'nocturnal' | 'diurnal' | 'crepuscular'
export type ConservationStatus = 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered'

// Helper functions type definitions
export interface OwlSearchFilters {
  size?: OwlSize
  habitat?: string
  conservationStatus?: ConservationStatus
  activityPattern?: ActivityPattern
  geographicRegion?: string
} 