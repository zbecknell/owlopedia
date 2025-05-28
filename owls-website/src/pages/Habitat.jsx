function Habitat() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Where Do Owls Live?
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Let's explore all the different places where owls make their homes around the world!
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 dark:from-blue-400 dark:to-indigo-400 rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Natural Surroundings */}
          <div className="content-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🌲</span>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Natural Places Owls Like</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
              <p>
                Owls are very good at finding homes in many different places! They pick spots where they can find food, 
                stay safe, and build nests for their babies.
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-amber-500 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Thick forests</strong> give owls lots of animals to hunt and holes in trees for homes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Open grasslands</strong> are great hunting spots for mice and other small animals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Wetlands and swamps</strong> help owls that like to catch fish and frogs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Hot desert areas</strong> are home to special owls that like dry places</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Global Distribution */}
          <div className="content-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🌍</span>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Owls Around the World</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
              <p>
                Owls live almost everywhere on Earth! They can be found on every continent except Antarctica. 
                Different types of owls live in different parts of the world.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-amber-100 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-amber-400 dark:border-blue-400">
                  <strong className="text-amber-700 dark:text-blue-300">North America:</strong> Great Horned Owls, Barn Owls, Screech Owls
                </div>
                <div className="bg-orange-100 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-orange-400 dark:border-indigo-400">
                  <strong className="text-orange-700 dark:text-indigo-300">Europe:</strong> Tawny Owls, Little Owls, Eagle Owls
                </div>
                <div className="bg-yellow-100 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-400 dark:border-purple-400">
                  <strong className="text-yellow-700 dark:text-purple-300">Asia:</strong> Snowy Owls, Fish Owls, Scops Owls
                </div>
                <div className="bg-green-100 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-green-400 dark:border-cyan-400">
                  <strong className="text-green-700 dark:text-cyan-300">Africa:</strong> Spotted Eagle Owls, African Grass Owls
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nesting Locations */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Where Owls Build Their Homes</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Different owls like to build their nests in different places</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-5xl mb-4 block">🌳</span>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">Tree Holes</h3>
              <p className="text-green-700 dark:text-green-200 text-sm leading-relaxed">
                Many owls make their homes in hollow trees or old woodpecker holes. Some build stick nests in tree branches.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-5xl mb-4 block">🏔️</span>
              <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-3">On the Ground</h3>
              <p className="text-amber-700 dark:text-amber-200 text-sm leading-relaxed">
                Burrowing owls dig holes underground like rabbits. Some owls make simple nests on the ground in tall grass.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-5xl mb-4 block">🏠</span>
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">Near People</h3>
              <p className="text-blue-700 dark:text-blue-200 text-sm leading-relaxed">
                Barn owls love to live in old barns, church towers, and empty buildings. They like living close to people!
              </p>
            </div>
          </div>
        </div>

        {/* Additional Facts */}
        <div className="content-card p-8 rounded-2xl">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">💡</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Cool Facts About Owl Homes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🦉</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">How Big is Their Home Area?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Small owls need just a few acres, but big owls like Great Horned Owls need huge areas - sometimes bigger than 1,000 football fields!</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌙</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">They Like Dark Places</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Owls don't like bright lights from cities. They need dark places so they can hunt with their super night vision.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🏔️</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">High and Low Places</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Some owls live way up high in mountains, while others live near the ocean. They can live almost anywhere!</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌡️</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Hot and Cold Places</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Snowy owls come from very cold places near the North Pole. Other owls live in hot places all year long.</p>
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