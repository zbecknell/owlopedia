function Habitat() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Owl Habitats
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore the diverse places where owls make their homes around the world
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Natural Surroundings */}
          <div className="content-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🌲</span>
              <h2 className="text-3xl font-bold text-gray-800">Natural Environments</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Owls are remarkably adaptable birds that choose their homes based on the availability of food, shelter, and nesting sites.
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span><strong>Dense forests</strong> provide abundant prey and tree cavities for nesting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span><strong>Open grasslands</strong> offer excellent hunting grounds for small mammals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span><strong>Wetlands and marshes</strong> support species that hunt fish and amphibians</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span><strong>Desert regions</strong> host specialized species adapted to arid conditions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Global Distribution */}
          <div className="content-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🌍</span>
              <h2 className="text-3xl font-bold text-gray-800">Global Distribution</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Owls inhabit every continent except Antarctica, demonstrating their remarkable ability to adapt to different climates and environments.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-400">
                  <strong className="text-amber-700">North America:</strong> Great Horned Owls, Barn Owls, Screech Owls
                </div>
                <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-400">
                  <strong className="text-orange-700">Europe:</strong> Tawny Owls, Little Owls, Eagle Owls
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-400">
                  <strong className="text-yellow-700">Asia:</strong> Snowy Owls, Fish Owls, Scops Owls
                </div>
                <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-400">
                  <strong className="text-green-700">Africa:</strong> Spotted Eagle Owls, African Grass Owls
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nesting Locations */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nesting Locations</h2>
            <p className="text-lg text-gray-600">Different owl species prefer different types of nesting sites</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-5xl mb-4 block">🌳</span>
              <h3 className="text-xl font-bold text-green-800 mb-3">Tree Cavities</h3>
              <p className="text-green-700 text-sm leading-relaxed">
                Many owls nest in hollow trees, abandoned woodpecker holes, or build stick nests in tree branches.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-5xl mb-4 block">🏔️</span>
              <h3 className="text-xl font-bold text-amber-800 mb-3">Ground Nests</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Burrowing owls dig underground tunnels, while some species create simple ground scrapes in grasslands.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-5xl mb-4 block">🏠</span>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Human Structures</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                Barn owls often nest in barns, church towers, and abandoned buildings, adapting well to urban environments.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Facts */}
        <div className="content-card p-8 rounded-2xl">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">💡</span>
            <h2 className="text-3xl font-bold text-gray-800">Habitat Facts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🦉</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Territory Size</h4>
                  <p className="text-gray-600 text-sm">Owl territories range from just a few acres for small species to over 1,000 acres for large species like Great Horned Owls.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌙</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Light Preferences</h4>
                  <p className="text-gray-600 text-sm">Owls prefer habitats with minimal light pollution, allowing them to hunt effectively using their exceptional night vision.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🏔️</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Altitude Range</h4>
                  <p className="text-gray-600 text-sm">Some owl species live at elevations up to 14,000 feet, while others thrive at sea level in coastal regions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌡️</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Climate Adaptation</h4>
                  <p className="text-gray-600 text-sm">Snowy owls migrate from Arctic regions to temperate areas, while tropical species remain in warm climates year-round.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Habitat 