function Diet() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Diet Information
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the dietary habits and feeding patterns of these remarkable nocturnal hunters
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Overall Dietary Habits */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🍽️</span>
            <h2 className="text-3xl font-bold text-gray-800">Overall Dietary Habits</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Owls are strictly carnivorous predators with highly specialized hunting techniques and dietary preferences. 
                Their diet varies significantly based on species, habitat, and seasonal availability of prey.
              </p>
              <p>
                As opportunistic hunters, owls have adapted to consume a wide variety of prey animals, from tiny insects 
                to mammals larger than themselves. Their exceptional hunting abilities make them apex predators in their ecosystems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Key Dietary Facts</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Strictly carnivorous (meat-eating only)</li>
                <li>• Opportunistic hunters</li>
                <li>• Swallow prey whole when possible</li>
                <li>• Regurgitate indigestible pellets</li>
                <li>• Diet varies by species and habitat</li>
                <li>• Can consume prey up to 3x their body weight</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What Owls Eat */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🦎</span>
            <h2 className="text-3xl font-bold text-gray-800">What Owls Eat</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🐭</span>
              <h3 className="text-lg font-bold text-blue-800 mb-3">Small Mammals</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Mice and voles</li>
                <li>• Rats and shrews</li>
                <li>• Rabbits and hares</li>
                <li>• Squirrels and chipmunks</li>
                <li>• Bats</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🐦</span>
              <h3 className="text-lg font-bold text-purple-800 mb-3">Birds</h3>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Songbirds and finches</li>
                <li>• Doves and pigeons</li>
                <li>• Woodpeckers</li>
                <li>• Other smaller owls</li>
                <li>• Waterfowl (ducks, geese)</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🐛</span>
              <h3 className="text-lg font-bold text-orange-800 mb-3">Insects & Arthropods</h3>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• Beetles and moths</li>
                <li>• Grasshoppers and crickets</li>
                <li>• Spiders and scorpions</li>
                <li>• Centipedes</li>
                <li>• Caterpillars</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-red-100 to-red-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🐸</span>
              <h3 className="text-lg font-bold text-red-800 mb-3">Reptiles & Amphibians</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Frogs and toads</li>
                <li>• Lizards and geckos</li>
                <li>• Small snakes</li>
                <li>• Salamanders</li>
                <li>• Turtles (small species)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feeding Frequency and Amounts */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">⏱️</span>
            <h2 className="text-3xl font-bold text-gray-800">How Often Owls Eat</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🌙</span>
              <h3 className="text-lg font-bold text-amber-800 mb-3">Daily Consumption</h3>
              <div className="text-amber-700 text-sm space-y-2">
                <p><strong>Small owls:</strong> 2-4 prey items per night</p>
                <p><strong>Medium owls:</strong> 1-3 prey items per night</p>
                <p><strong>Large owls:</strong> 1-2 large prey items per night</p>
                <p className="text-xs mt-3 italic">Varies by prey size and availability</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">⚖️</span>
              <h3 className="text-lg font-bold text-cyan-800 mb-3">Food Requirements</h3>
              <div className="text-cyan-700 text-sm space-y-2">
                <p><strong>Body weight ratio:</strong> 20-30% daily</p>
                <p><strong>Breeding season:</strong> Up to 50% increase</p>
                <p><strong>Winter months:</strong> Higher caloric needs</p>
                <p className="text-xs mt-3 italic">More food needed in cold weather</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🕐</span>
              <h3 className="text-lg font-bold text-pink-800 mb-3">Feeding Schedule</h3>
              <div className="text-pink-700 text-sm space-y-2">
                <p><strong>Peak hunting:</strong> Dusk and dawn</p>
                <p><strong>Active period:</strong> Throughout the night</p>
                <p><strong>Digestion time:</strong> 6-10 hours</p>
                <p className="text-xs mt-3 italic">Can go 1-2 days without food if needed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hunting and Feeding Behavior */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🎯</span>
            <h2 className="text-3xl font-bold text-gray-800">Hunting & Feeding Behavior</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hunting Techniques</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">Perch and Pounce</h4>
                  <p className="text-blue-700 text-sm">Wait silently on a perch, then swoop down on unsuspecting prey below.</p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">Low Flight Hunting</h4>
                  <p className="text-green-700 text-sm">Fly low over open areas, using exceptional hearing to locate prey.</p>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-2">Ground Stalking</h4>
                  <p className="text-purple-700 text-sm">Some species hunt on foot, especially for insects and small ground prey.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Feeding Process</h3>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <span className="text-yellow-600 font-bold mr-3">1.</span>
                  <div>
                    <h4 className="font-semibold text-yellow-800">Capture</h4>
                    <p className="text-yellow-700 text-sm">Use powerful talons to grasp and kill prey instantly</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <span className="text-orange-600 font-bold mr-3">2.</span>
                  <div>
                    <h4 className="font-semibold text-orange-800">Consumption</h4>
                    <p className="text-orange-700 text-sm">Swallow small prey whole or tear larger prey into pieces</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <span className="text-red-600 font-bold mr-3">3.</span>
                  <div>
                    <h4 className="font-semibold text-red-800">Digestion</h4>
                    <p className="text-red-700 text-sm">Digest soft tissues and regurgitate pellets of bones and fur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Species-Specific Diets */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🦉</span>
            <h2 className="text-3xl font-bold text-gray-800">Species-Specific Dietary Preferences</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-amber-800 mb-2">Great Horned Owl</h4>
              <p className="text-amber-700 text-sm">Mammals (rabbits, skunks), birds, reptiles. Very adaptable diet.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-blue-800 mb-2">Barn Owl</h4>
              <p className="text-blue-700 text-sm">Primarily small mammals (90% rodents), especially voles and mice.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-green-800 mb-2">Screech Owl</h4>
              <p className="text-green-700 text-sm">Insects, small mammals, birds, amphibians. Very diverse diet.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-purple-800 mb-2">Snowy Owl</h4>
              <p className="text-purple-700 text-sm">Primarily lemmings and other small mammals, some birds.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-red-800 mb-2">Burrowing Owl</h4>
              <p className="text-red-700 text-sm">Insects, small mammals, reptiles, amphibians. Ground-based hunting.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-yellow-800 mb-2">Great Grey Owl</h4>
              <p className="text-yellow-700 text-sm">Primarily small mammals, especially voles. Specialized for rodent hunting.</p>
            </div>
          </div>
        </div>

        {/* External Resources */}
        <div className="content-card p-8 rounded-2xl">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🔗</span>
            <h2 className="text-3xl font-bold text-gray-800">External Resources for More Detail</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Scientific Resources</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    <a href="https://www.allaboutbirds.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Cornell Lab of Ornithology - All About Birds
                    </a>
                  </h4>
                  <p className="text-blue-700 text-sm">Comprehensive database of bird species including detailed dietary information and feeding behaviors.</p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-green-800 mb-2">
                    <a href="https://www.audubon.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      National Audubon Society
                    </a>
                  </h4>
                  <p className="text-green-700 text-sm">Extensive bird guides with feeding habits, prey preferences, and seasonal dietary changes.</p>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    <a href="https://www.owlpages.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      The Owl Pages
                    </a>
                  </h4>
                  <p className="text-purple-700 text-sm">Specialized resource dedicated to owl species with detailed dietary analysis and prey studies.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Research & Conservation</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-4 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    <a href="https://www.peregrinefund.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      The Peregrine Fund
                    </a>
                  </h4>
                  <p className="text-orange-700 text-sm">Research organization studying raptor ecology, including detailed dietary studies and prey analysis.</p>
                </div>
                <div className="bg-gradient-to-r from-red-100 to-red-200 p-4 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-red-800 mb-2">
                    <a href="https://www.hawkmountain.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Hawk Mountain Sanctuary
                    </a>
                  </h4>
                  <p className="text-red-700 text-sm">Conservation research with extensive data on raptor feeding ecology and prey relationships.</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    <a href="https://www.birdlife.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      BirdLife International
                    </a>
                  </h4>
                  <p className="text-yellow-700 text-sm">Global bird conservation with species profiles including feeding ecology and dietary requirements.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
            <p className="text-gray-700 text-sm text-center">
              <strong>Note:</strong> These external links provide additional scientific detail on individual food items, 
              seasonal dietary variations, and regional prey preferences for specific owl species.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diet 