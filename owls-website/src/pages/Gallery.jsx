import { useState } from 'react'
import { useOwlData } from '../hooks/useOwlData'
import { Link } from 'react-router-dom'

function Gallery() {
  const { owls, loading, error } = useOwlData()
  const [selectedOwl, setSelectedOwl] = useState('all')
  const [imageError, setImageError] = useState({})

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading gallery...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">Error loading gallery: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-amber-600 dark:bg-blue-600 text-white rounded-lg hover:bg-amber-700 dark:hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  // Get all images from all owls
  const getAllImages = () => {
    const allImages = []
    owls.forEach(owl => {
      Object.entries(owl.images).forEach(([type, imageData]) => {
        allImages.push({
          owl,
          type,
          ...imageData,
          id: `${owl.id}-${type}`
        })
      })
    })
    return allImages
  }

  const getFilteredImages = () => {
    if (selectedOwl === 'all') {
      return getAllImages()
    }
    const owl = owls.find(o => o.id === selectedOwl)
    if (!owl) return []
    
    return Object.entries(owl.images).map(([type, imageData]) => ({
      owl,
      type,
      ...imageData,
      id: `${owl.id}-${type}`
    }))
  }

  const handleImageError = (imageId) => {
    setImageError(prev => ({ ...prev, [imageId]: true }))
  }

  const getImageUrl = (owl, filename) => {
    return `${import.meta.env.BASE_URL}owls/${owl.id}/${filename}`
  }

  const filteredImages = getFilteredImages()

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen">
      {/* Header */}
      <div className="content-card mx-8 mt-8 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Owl Image Gallery
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-200 text-lg max-w-3xl mx-auto">
          Explore stunning photographs of owls in their natural habitats. Each image tells a story of these magnificent nocturnal hunters.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="mx-8 my-6">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedOwl('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedOwl === 'all'
                ? 'bg-amber-600 dark:bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
            }`}
          >
            All Species ({getAllImages().length})
          </button>
          {owls.map(owl => {
            const imageCount = Object.keys(owl.images).length
            return (
              <button
                key={owl.id}
                onClick={() => setSelectedOwl(owl.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedOwl === owl.id
                    ? 'bg-amber-600 dark:bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {owl.commonName} ({imageCount})
              </button>
            )
          })}
        </div>
      </div>

      {/* Image Grid */}
      <div className="mx-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Link
              key={image.id}
              to={`/gallery/${image.owl.id}/${image.type}`}
              className="group block"
            >
              <div className="content-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                  {!imageError[image.id] ? (
                    <img
                      src={getImageUrl(image.owl, image.filename)}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError(image.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🦉</div>
                        <p className="text-sm">Image not available</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {image.filename}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover Overlay - only visible on hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* View Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">View Details</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-blue-400 transition-colors">
                      {image.owl.commonName}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {image.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {image.caption}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🦉</div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">No images found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try selecting a different filter or check back later.</p>
          </div>
        )}
      </div>

      {/* User Submission Section */}
      <div className="mx-8 pb-16">
        <div className="content-card p-8 rounded-2xl border-2 border-dashed border-amber-300 dark:border-blue-400">
          <div className="text-center">
            <div className="text-5xl mb-4">📸</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Share Your Owl Photos!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Have you captured amazing owl photos? We'd love to feature them in our gallery! 
              Share your owl photography with the Owlopedia community.
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Submit Your Photos
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              By submitting photos, you agree to our community guidelines and allow us to feature your work with proper attribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery 