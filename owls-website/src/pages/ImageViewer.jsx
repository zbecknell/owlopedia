import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useOwlData } from '../hooks/useOwlData'

function ImageViewer() {
  const { owlId, imageType } = useParams()
  const navigate = useNavigate()
  const { owls, loading, error } = useOwlData()
  const [imageError, setImageError] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [allImages, setAllImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!loading && owls.length > 0) {
      // Get current owl and image
      const owl = owls.find(o => o.id === owlId)
      if (!owl || !owl.images[imageType]) {
        navigate('/gallery')
        return
      }

      const imageData = owl.images[imageType]
      setCurrentImage({
        owl,
        type: imageType,
        ...imageData,
        id: `${owl.id}-${imageType}`
      })

      // Get all images for navigation
      const allOwlImages = []
      owls.forEach(owlData => {
        Object.entries(owlData.images).forEach(([type, imgData]) => {
          allOwlImages.push({
            owl: owlData,
            type,
            ...imgData,
            id: `${owlData.id}-${type}`
          })
        })
      })
      setAllImages(allOwlImages)
      
      // Find current index
      const index = allOwlImages.findIndex(img => img.id === `${owlId}-${imageType}`)
      setCurrentIndex(index)
    }
  }, [owls, loading, owlId, imageType, navigate])

  const getImageUrl = (owl, filename) => {
    return `${import.meta.env.BASE_URL}owls/${owl.id}/${filename}`
  }

  const navigateToImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % allImages.length
      : (currentIndex - 1 + allImages.length) % allImages.length
    
    const newImage = allImages[newIndex]
    navigate(`/gallery/${newImage.owl.id}/${newImage.type}`)
  }

  const getRelatedImages = () => {
    if (!currentImage) return []
    return Object.entries(currentImage.owl.images)
      .filter(([type]) => type !== imageType)
      .map(([type, imgData]) => ({
        owl: currentImage.owl,
        type,
        ...imgData,
        id: `${currentImage.owl.id}-${type}`
      }))
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 dark:border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading image...</p>
        </div>
      </div>
    )
  }

  if (error || !currentImage) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🦉</div>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Image Not Found</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">The requested image could not be found.</p>
          <Link 
            to="/gallery" 
            className="px-6 py-3 bg-amber-600 dark:bg-blue-600 text-white rounded-lg hover:bg-amber-700 dark:hover:bg-blue-700 transition-colors"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    )
  }

  const relatedImages = getRelatedImages()

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen">
      {/* Navigation Header */}
      <div className="flex items-center justify-between p-6">
        <Link 
          to="/gallery"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Gallery</span>
        </Link>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigateToImage('prev')}
            className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300"
            title="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} of {allImages.length}
          </span>

          <button
            onClick={() => navigateToImage('next')}
            className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300"
            title="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="content-card rounded-2xl overflow-hidden">
          <div className="relative">
            {!imageError ? (
              <img
                src={getImageUrl(currentImage.owl, currentImage.filename)}
                alt={currentImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🦉</div>
                  <p className="text-lg text-gray-500 dark:text-gray-400">Image not available</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    {currentImage.filename}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Image Details */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {currentImage.owl.commonName}
                  </h1>
                  <span className="px-3 py-1 bg-amber-100 dark:bg-gray-700 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium uppercase tracking-wide">
                    {currentImage.type}
                  </span>
                </div>
                
                <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-4">
                  {currentImage.owl.scientificName}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Image Caption</h3>
                  <p className="text-blue-700 dark:text-blue-100">
                    {currentImage.caption}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">About This Species</h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                  {currentImage.owl.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Activity:</span>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {currentImage.owl.behavior.activityPattern}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Conservation:</span>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {currentImage.owl.conservation.status}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Habitat:</span>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {currentImage.owl.habitat.preferredEnvironments[0]}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Primary Prey:</span>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {currentImage.owl.diet.primaryPrey[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Images */}
        {relatedImages.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              More Photos of {currentImage.owl.commonName}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedImages.map((image) => (
                <Link
                  key={image.id}
                  to={`/gallery/${image.owl.id}/${image.type}`}
                  className="group block"
                >
                  <div className="content-card rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <div className="relative h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                      <img
                        src={getImageUrl(image.owl, image.filename)}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center text-gray-500 dark:text-gray-400">
                        <span className="text-2xl">🦉</span>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 uppercase tracking-wide">
                        {image.type}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageViewer 