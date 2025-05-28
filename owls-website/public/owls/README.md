# Owl Images Directory Structure

This directory contains images for the Owlopedia gallery, organized by species.

## Directory Structure

```
public/owls/
├── great-horned-owl/
│   ├── hero.png
│   ├── portrait.jpg
│   ├── habitat.jpg
│   ├── hunting.jpg
│   ├── family.jpg
│   └── closeup.jpg
├── barn-owl/
│   ├── hero.jpg
│   ├── portrait.jpg
│   ├── habitat.jpg
│   ├── nocturnal.jpg
│   ├── nest.jpg
│   └── perched.jpg
└── snowy-owl/
    ├── hero.jpg
    ├── portrait.jpg
    ├── habitat.jpg
    ├── flight.jpg
    ├── perched.jpg
    └── juvenile.jpg
```

## Naming Convention

- **Folder names**: Use the exact `id` from the owl data (kebab-case)
- **File names**: Match the `filename` property in the owl JSON data
- **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`

## Image Guidelines

### Recommended Specifications
- **Resolution**: Minimum 1200px wide for hero/portrait images
- **Aspect ratio**: 4:3 or 16:9 for landscape shots, 3:4 for portraits
- **File size**: Keep under 2MB for web performance
- **Format**: JPEG for photos, PNG for images with transparency

### Image Types

1. **hero**: Main showcase image for the species
2. **portrait**: Close-up facial features and details
3. **habitat**: Owl in its natural environment
4. **hunting/nocturnal/flight**: Action shots showing behavior
5. **family/nest**: Breeding and nesting scenes
6. **closeup/perched/juvenile**: Additional characteristic poses

## Adding New Images

1. Create a folder with the owl's ID (from `owls.json`)
2. Add images with filenames matching the JSON data
3. Update the `owls.json` file if adding new image types
4. Ensure images are optimized for web use

## Missing Images

The gallery gracefully handles missing images by showing:
- An owl emoji placeholder
- "Image not available" message
- The expected filename for debugging

## Attribution

Please ensure all images are properly licensed and credited in the metadata section of `owls.json`. 