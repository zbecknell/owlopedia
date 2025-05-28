function Diet() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            What Do Owls Eat?
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Let's learn about all the different foods that owls like to eat and how they catch their meals!
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 dark:from-blue-400 dark:to-indigo-400 rounded-full"></div>
          </div>
        </div>

        {/* Overall Dietary Habits */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🍽️</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">What Kind of Food Do Owls Like?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
              <p>
                Owls only eat meat! They are great hunters that catch all different kinds of animals. 
                Different types of owls like to eat different things, depending on where they live.
              </p>
              <p>
                Owls are really good at catching food. They can catch tiny bugs or animals that are much bigger than they are! 
                They use their super hearing and great eyesight to find their meals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Cool Food Facts</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Only eat meat (no plants!)</li>
                <li>• Hunt many different animals</li>
                <li>• Swallow small animals whole</li>
                <li>• Spit up pellets of bones and fur</li>
                <li>• Eat different things in different places</li>
                <li>• Can eat animals 3 times heavier than them</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What Owls Eat */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🦎</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Different Animals Owls Eat</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🐭</span>
              <h3 className="text-lg font-bold text-blue-800 mb-3">Small Furry Animals</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Mice and rats</li>
                <li>• Rabbits and bunnies</li>
                <li>• Squirrels and chipmunks</li>
                <li>• Bats</li>
                <li>• Small furry animals</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🐦</span>
              <h3 className="text-lg font-bold text-purple-800 mb-3">Birds</h3>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Small songbirds</li>
                <li>• Doves and pigeons</li>
                <li>• Woodpeckers</li>
                <li>• Sometimes other owls</li>
                <li>• Ducks and geese</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🐛</span>
              <h3 className="text-lg font-bold text-orange-800 mb-3">Bugs and Creepy Crawlies</h3>
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
              <h3 className="text-lg font-bold text-red-800 mb-3">Reptiles and Amphibians</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Frogs and toads</li>
                <li>• Lizards and geckos</li>
                <li>• Small snakes</li>
                <li>• Salamanders</li>
                <li>• Small turtles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feeding Frequency and Amounts */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">⏱️</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">How Much and How Often Owls Eat</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🌙</span>
              <h3 className="text-lg font-bold text-amber-800 mb-3">Every Night</h3>
              <div className="text-amber-700 text-sm space-y-2">
                <p><strong>Small owls:</strong> Eat 2-4 animals each night</p>
                <p><strong>Medium owls:</strong> Eat 1-3 animals each night</p>
                <p><strong>Big owls:</strong> Eat 1-2 big animals each night</p>
                <p className="text-xs mt-3 italic">Depends on how big the food is</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">⚖️</span>
              <h3 className="text-lg font-bold text-cyan-800 mb-3">How Much They Need</h3>
              <div className="text-cyan-700 text-sm space-y-2">
                <p><strong>Normal days:</strong> About 1/4 of their weight</p>
                <p><strong>When having babies:</strong> Need 50% more food</p>
                <p><strong>Cold winter days:</strong> Need extra food to stay warm</p>
                <p className="text-xs mt-3 italic">Need more food when it's cold</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🕐</span>
              <h3 className="text-lg font-bold text-pink-800 mb-3">When They Eat</h3>
              <div className="text-pink-700 text-sm space-y-2">
                <p><strong>Best hunting time:</strong> When the sun goes down</p>
                <p><strong>Active time:</strong> All night long</p>
                <p><strong>Digestion time:</strong> Takes 6-10 hours</p>
                <p className="text-xs mt-3 italic">Can go 1-2 days without food if needed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hunting and Feeding Behavior */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🎯</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">How Owls Catch and Eat Their Food</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">How They Hunt</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">Sit and Wait</h4>
                  <p className="text-blue-700 text-sm">Sit very still on a tree branch, then swoop down fast when they see food.</p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">Flying Low</h4>
                  <p className="text-green-700 text-sm">Fly close to the ground and use their super hearing to find animals.</p>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-lg border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-800 mb-2">Walking on the Ground</h4>
                  <p className="text-purple-700 text-sm">Some owls walk around on the ground to catch bugs and small animals.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">How They Eat</h3>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <span className="text-yellow-600 font-bold mr-3">1.</span>
                  <div>
                    <h4 className="font-semibold text-yellow-800">Catch</h4>
                    <p className="text-yellow-700 text-sm">Use their super strong claws to grab and catch the animal</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <span className="text-orange-600 font-bold mr-3">2.</span>
                  <div>
                    <h4 className="font-semibold text-orange-800">Eat</h4>
                    <p className="text-orange-700 text-sm">Swallow small animals whole or tear big ones into pieces</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <span className="text-red-600 font-bold mr-3">3.</span>
                  <div>
                    <h4 className="font-semibold text-red-800">Clean Up</h4>
                    <p className="text-red-700 text-sm">Digest the good parts and cough up pellets of bones and fur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Species-Specific Diets */}
        <div className="content-card p-8 rounded-2xl">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🦉</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Different Owls Like Different Foods</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-amber-800 mb-2">Great Horned Owl</h4>
              <p className="text-amber-700 text-sm">Eats rabbits, skunks, birds, lizards. Will eat almost anything!</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-blue-800 mb-2">Barn Owl</h4>
              <p className="text-blue-700 text-sm">Loves mice and rats the most. Almost all their food is small furry animals.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-green-800 mb-2">Screech Owl</h4>
              <p className="text-green-700 text-sm">Eats bugs, small animals, birds, frogs. Likes lots of different foods.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-purple-800 mb-2">Snowy Owl</h4>
              <p className="text-purple-700 text-sm">Mostly eats lemmings (small furry animals) and other mice-like animals.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-red-800 mb-2">Burrowing Owl</h4>
              <p className="text-red-700 text-sm">Eats bugs, small animals, lizards, frogs. Hunts on the ground.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg shadow-md">
              <h4 className="font-semibold text-yellow-800 mb-2">Great Grey Owl</h4>
              <p className="text-yellow-700 text-sm">Really good at catching mice and other small furry animals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diet 