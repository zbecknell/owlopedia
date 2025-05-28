import { useState, useEffect } from 'react'

export function useOwlData() {
  const [owls, setOwls] = useState([])
  const [metadata, setMetadata] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchOwlData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${import.meta.env.BASE_URL}owls.json`)
        
        if (!response.ok) {
          throw new Error(`Failed to fetch owl data: ${response.status}`)
        }
        
        const data = await response.json()
        setOwls(data.owls)
        setMetadata(data.metadata)
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching owl data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchOwlData()
  }, [])

  // Helper function to get a specific owl by ID
  const getOwlById = (id) => {
    return owls.find(owl => owl.id === id)
  }

  // Helper function to get owls by habitat type
  const getOwlsByHabitat = (habitatType) => {
    return owls.filter(owl => 
      owl.habitat.preferredEnvironments.some(env => 
        env.toLowerCase().includes(habitatType.toLowerCase())
      )
    )
  }

  // Helper function to get owls by activity pattern
  const getOwlsByActivity = (activityPattern) => {
    return owls.filter(owl => 
      owl.behavior.activityPattern.toLowerCase().includes(activityPattern.toLowerCase())
    )
  }

  // Helper function to get owls by conservation status
  const getOwlsByConservationStatus = (status) => {
    return owls.filter(owl => 
      owl.conservation.status.toLowerCase().includes(status.toLowerCase())
    )
  }

  // Helper function to search owls by name or description
  const searchOwls = (searchTerm) => {
    const term = searchTerm.toLowerCase()
    return owls.filter(owl => 
      owl.commonName.toLowerCase().includes(term) ||
      owl.scientificName.toLowerCase().includes(term) ||
      owl.description.toLowerCase().includes(term)
    )
  }

  // Helper function to get random owl facts
  const getRandomFacts = (count = 5) => {
    const allFacts = owls.flatMap(owl => 
      owl.facts.map(fact => ({ fact, species: owl.commonName }))
    )
    
    const shuffled = allFacts.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  return {
    owls,
    metadata,
    loading,
    error,
    // Helper functions
    getOwlById,
    getOwlsByHabitat,
    getOwlsByActivity,
    getOwlsByConservationStatus,
    searchOwls,
    getRandomFacts
  }
}

// Hook for getting a single owl by ID
export function useOwl(owlId) {
  const { owls, loading, error, getOwlById } = useOwlData()
  const [owl, setOwl] = useState(null)

  useEffect(() => {
    if (!loading && owls.length > 0) {
      const foundOwl = getOwlById(owlId)
      setOwl(foundOwl || null)
    }
  }, [owls, loading, owlId, getOwlById])

  return {
    owl,
    loading,
    error,
    notFound: !loading && !error && !owl
  }
} 