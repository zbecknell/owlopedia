# Owl Data JSON Schema Documentation

## Overview

The `owls.json` file contains structured data about different owl species for the Owlopedia educational website. The schema is designed to be comprehensive, covering physical characteristics, behavior, habitat, diet, conservation status, and interesting facts.

## Schema Structure

### Root Object

```json
{
  "owls": [Array of Owl objects],
  "metadata": {Metadata object}
}
```

### Owl Object

Each owl in the array has the following structure:

#### Basic Information
- `id` (string): Unique identifier (kebab-case)
- `commonName` (string): Common name of the species
- `scientificName` (string): Scientific/Latin name
- `description` (string): General description of the species

#### Images
```json
"images": {
  "hero": "hero-image.jpg",
  "portrait": "portrait-image.jpg", 
  "habitat": "habitat-image.jpg"
}
```

#### Physical Characteristics
```json
"physicalCharacteristics": {
  "height": { "min": 18, "max": 25, "unit": "inches" },
  "wingspan": { "min": 40, "max": 57, "unit": "inches" },
  "weight": { "min": 2.0, "max": 5.5, "unit": "pounds" },
  "lifespan": {
    "wild": "5-12 years",
    "captivity": "20-25 years"
  },
  "distinctiveFeatures": ["feature1", "feature2"],
  "sexualDimorphism": "Description of differences between males and females"
}
```

#### Habitat
```json
"habitat": {
  "geographicRange": "Description of where they're found",
  "preferredEnvironments": ["environment1", "environment2"],
  "nestingLocations": ["location1", "location2"],
  "territorySize": "Size description",
  "altitudeRange": "Altitude range"
}
```

#### Behavior
```json
"behavior": {
  "activityPattern": "Nocturnal/Diurnal/Crepuscular",
  "peakHuntingTimes": ["time1", "time2"],
  "socialBehavior": "Description",
  "territorialBehavior": "Description",
  "vocalizations": [
    {
      "type": "Hoot",
      "description": "Sound description",
      "purpose": "Why they make this sound"
    }
  ],
  "flightPattern": "Description",
  "huntingMethods": ["method1", "method2"],
  "breedingBehavior": {
    "matingSystem": "Monogamous/Polygamous",
    "breedingSeason": "Time period",
    "nestingPeriod": "Duration",
    "eggCount": "Number range",
    "incubationPeriod": "Duration",
    "fledgingPeriod": "Duration"
  },
  "migration": "Migration pattern (optional)"
}
```

#### Diet
```json
"diet": {
  "dietType": "Carnivorous/Omnivorous",
  "primaryPrey": ["prey1", "prey2"],
  "preySize": "Size description",
  "huntingTechniques": ["technique1", "technique2"],
  "feedingHabits": {
    "consumptionMethod": "How they eat",
    "dailyConsumption": "Amount description",
    "regurgitation": "Pellet information"
  }
}
```

#### Conservation
```json
"conservation": {
  "status": "Conservation status",
  "populationTrend": "Stable/Declining/Increasing",
  "threats": ["threat1", "threat2"],
  "protectionStatus": "Legal protection info"
}
```

#### Facts
```json
"facts": [
  "Interesting fact 1",
  "Interesting fact 2"
]
```

### Metadata Object

```json
"metadata": {
  "version": "1.0",
  "lastUpdated": "YYYY-MM-DD",
  "totalSpecies": 3,
  "dataSource": "Source description",
  "imageCredits": "Credit information"
}
```

## Usage Examples

### Using the Hook

```javascript
import { useOwlData, useOwl } from './hooks/useOwlData'

// Get all owls
function OwlList() {
  const { owls, loading, error } = useOwlData()
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  return (
    <div>
      {owls.map(owl => (
        <OwlCard key={owl.id} owl={owl} compact />
      ))}
    </div>
  )
}

// Get specific owl
function OwlDetail({ owlId }) {
  const { owl, loading, error, notFound } = useOwl(owlId)
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (notFound) return <div>Owl not found</div>
  
  return <OwlCard owl={owl} />
}
```

### Filtering Examples

```javascript
const { getOwlsByHabitat, getOwlsByActivity, searchOwls } = useOwlData()

// Get forest-dwelling owls
const forestOwls = getOwlsByHabitat('forest')

// Get nocturnal owls  
const nocturnalOwls = getOwlsByActivity('nocturnal')

// Search owls
const searchResults = searchOwls('great horned')
```

## Field Guidelines

### Measurements
- Use consistent units (inches for height/wingspan, pounds for weight)
- Provide min/max ranges when there's variation
- Use decimal points for precise measurements

### Text Fields
- Keep descriptions informative but concise
- Use consistent terminology across species
- Include scientific accuracy

### Arrays
- Order items by importance/frequency
- Keep lists focused and relevant
- Use consistent formatting

### Conservation Status
Use standard IUCN categories:
- Least Concern
- Near Threatened  
- Vulnerable
- Endangered
- Critically Endangered

### Activity Patterns
- Nocturnal: Active at night
- Diurnal: Active during day
- Crepuscular: Active at dawn/dusk

## Adding New Species

1. Follow the exact schema structure
2. Use kebab-case for IDs (e.g., "great-horned-owl")
3. Ensure all required fields are present
4. Update metadata.totalSpecies count
5. Update metadata.lastUpdated date

## File Location

The `owls.json` file should be placed in the `public/` folder so it can be fetched by the frontend application at runtime.

## TypeScript Support

TypeScript type definitions are available in `src/types/owls.ts` for type safety and better development experience. 