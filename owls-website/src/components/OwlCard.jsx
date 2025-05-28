function OwlCard({ owl, compact = false }) {
  if (!owl) return null

  const getConservationStatusColor = (status) => {
    if (status.includes('Least Concern')) return 'text-green-600 dark:text-green-400'
    if (status.includes('Vulnerable')) return 'text-yellow-600 dark:text-yellow-400'
    if (status.includes('Endangered')) return 'text-red-600 dark:text-red-400'
    return 'text-gray-600 dark:text-gray-400'
  }

  const formatSize = (measurement) => {
    if (measurement.min === measurement.max) {
      return `${measurement.min} ${measurement.unit}`
    }
    return `${measurement.min}-${measurement.max} ${measurement.unit}`
  }

  if (compact) {
    return (
      <div className="content-card p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center text-2xl border-2 border-gray-700 dark:border-gray-300">
            🦉
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{owl.commonName}</h3>
            <p className="text-sm italic text-gray-600 dark:text-gray-300">{owl.scientificName}</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-sm line-clamp-3">{owl.description}</p>
      </div>
    )
  }

  return (
    <div className="content-card p-8 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">{owl.commonName}</h2>
        <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-4">{owl.scientificName}</p>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{owl.description}</p>
      </div>

      {/* Physical Characteristics */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Physical Characteristics</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Height:</span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{formatSize(owl.physicalCharacteristics.height)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Wingspan:</span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{formatSize(owl.physicalCharacteristics.wingspan)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Weight:</span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{formatSize(owl.physicalCharacteristics.weight)}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Behavior & Diet</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Activity:</span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{owl.behavior.activityPattern}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Primary Prey:</span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">{owl.diet.primaryPrey[0]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Conservation:</span>
              <span className={`font-medium ${getConservationStatusColor(owl.conservation.status)}`}>
                {owl.conservation.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Distinctive Features */}
      {owl.physicalCharacteristics.distinctiveFeatures.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Distinctive Features</h3>
          <div className="flex flex-wrap gap-2">
            {owl.physicalCharacteristics.distinctiveFeatures.map((feature, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-amber-100 dark:bg-gray-700 text-amber-800 dark:text-amber-200 rounded-full text-sm border border-amber-200 dark:border-gray-600"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Random Facts */}
      {owl.facts.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Fascinating Facts</h3>
          <div className="grid gap-3">
            {owl.facts.slice(0, 3).map((fact, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 text-sm mt-1">💡</span>
                <p className="text-blue-800 dark:text-blue-200 text-sm">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default OwlCard 