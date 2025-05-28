function Anatomy() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Owls: A Cool Look Inside Their Bodies
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Owls are amazing birds that can see well at night and make soft, silent flights. Let's learn about their body parts and how they work!
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 dark:from-blue-400 dark:to-indigo-400 rounded-full"></div>
          </div>
        </div>

        {/* Overall Anatomy Overview */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🦉</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">What Makes Owls Special?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
              <p>
                Owls have special body parts that help them hunt at night. They can fly very quietly and see in the dark. 
                Their bodies are made just right for catching food when it's dark outside!
              </p>
              <p>
                Owls are birds that eat meat. They use their sharp claws and beaks to catch mice, rabbits, and other small animals. 
                There are over 200 different types of owls around the world!
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Cool Owl Facts</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• There are more than 200 types of owls</li>
                <li>• They live almost everywhere in the world</li>
                <li>• They eat meat like mice and small animals</li>
                <li>• Most owls hunt at night</li>
                <li>• They can see really well in the dark</li>
                <li>• They fly without making noise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Size and Physical Dimensions */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">📏</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">How Big Are Owls?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">📐</span>
              <h3 className="text-lg font-bold text-green-800 mb-3">How Tall</h3>
              <div className="text-green-700 text-sm space-y-2">
                <p><strong>Smallest:</strong> Elf Owl - 5 inches tall</p>
                <p><strong>Biggest:</strong> Great Horned Owl - 25 inches tall</p>
                <p><strong>Most owls:</strong> 8-20 inches tall</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">⚖️</span>
              <h3 className="text-lg font-bold text-purple-800 mb-3">How Heavy</h3>
              <div className="text-purple-700 text-sm space-y-2">
                <p><strong>Lightest:</strong> Elf Owl - as light as a small cookie</p>
                <p><strong>Heaviest:</strong> Eagle Owl - as heavy as a small dog</p>
                <p><strong>Most owls:</strong> About as heavy as a hamster</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🦅</span>
              <h3 className="text-lg font-bold text-orange-800 mb-3">Wing Size</h3>
              <div className="text-orange-700 text-sm space-y-2">
                <p><strong>Smallest:</strong> Elf Owl - 15 inches across</p>
                <p><strong>Biggest:</strong> Great Grey Owl - 60 inches across</p>
                <p><strong>Most owls:</strong> 20-48 inches across</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lifespan Information */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">⏰</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">How Long Do Owls Live?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">How Long They Live</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">In the Wild</h4>
                  <p className="text-amber-700 text-sm">Most owls live about 4-10 years when they live outside in nature.</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">With People Taking Care</h4>
                  <p className="text-blue-700 text-sm">When people take care of owls, they can live 15-25 years or even longer!</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">How Owls Grow Up</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-pink-100 rounded-lg">
                  <span className="text-2xl mr-3">🥚</span>
                  <div>
                    <h4 className="font-semibold text-pink-800">Baby in Egg</h4>
                    <p className="text-pink-700 text-xs">About 1 month inside the egg</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-yellow-100 rounded-lg">
                  <span className="text-2xl mr-3">🐣</span>
                  <div>
                    <h4 className="font-semibold text-yellow-800">Baby Owl</h4>
                    <p className="text-yellow-700 text-xs">Lives in nest for 6-10 weeks</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-100 rounded-lg">
                  <span className="text-2xl mr-3">🦅</span>
                  <div>
                    <h4 className="font-semibold text-green-800">Young Owl</h4>
                    <p className="text-green-700 text-xs">Learning to hunt with parents for 3-6 months</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                  <span className="text-2xl mr-3">🦉</span>
                  <div>
                    <h4 className="font-semibold text-blue-800">Grown-up Owl</h4>
                    <p className="text-blue-700 text-xs">Ready to have babies at 1-2 years old</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Respiratory System */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🫁</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">How Owls Breathe</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
              <p>
                Owls breathe differently than people do! They have special air bags inside their bodies that help them get 
                lots of oxygen. This helps them fly fast and hunt for food.
              </p>
              <div className="bg-gradient-to-r from-cyan-100 to-cyan-200 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">Special Air Bags</h4>
                <p className="text-cyan-700 text-sm">
                  Owls have 9 air bags that work with their lungs. This gives them lots of fresh air 
                  even when they're flying and working hard.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">How They Breathe</h3>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <span className="text-blue-600 font-bold mr-3">1.</span>
                  <div>
                    <h4 className="font-semibold text-blue-800">Breathe In</h4>
                    <p className="text-blue-700 text-sm">Air goes through their nose to special air bags</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <span className="text-green-600 font-bold mr-3">2.</span>
                  <div>
                    <h4 className="font-semibold text-green-800">Breathe Out</h4>
                    <p className="text-green-700 text-sm">Air moves from air bags through lungs</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <span className="text-purple-600 font-bold mr-3">3.</span>
                  <div>
                    <h4 className="font-semibold text-purple-800">Breathe In Again</h4>
                    <p className="text-purple-700 text-sm">Old air moves to different air bags</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <span className="text-orange-600 font-bold mr-3">4.</span>
                  <div>
                    <h4 className="font-semibold text-orange-800">Breathe Out Again</h4>
                    <p className="text-orange-700 text-sm">Old air leaves the body</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Physical Characteristics */}
        <div className="content-card p-8 rounded-2xl">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">✨</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Cool Body Parts That Make Owls Special</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">👁️</span>
              <h3 className="text-lg font-bold text-amber-800 mb-3">Super Eyes</h3>
              <ul className="text-amber-700 text-sm space-y-1">
                <li>• Eyes see 100 times better than ours</li>
                <li>• Can't move their eyes - must turn their head</li>
                <li>• Eyes are shaped like tubes</li>
                <li>• Both eyes look forward for better vision</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">👂</span>
              <h3 className="text-lg font-bold text-green-800 mb-3">Different-Sized Ears</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Ear holes are at different heights</li>
                <li>• This helps them know exactly where sounds come from</li>
                <li>• Can hear mice moving under snow</li>
                <li>• Face feathers help collect sounds</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">🪶</span>
              <h3 className="text-lg font-bold text-blue-800 mb-3">Quiet Flying Feathers</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Feathers have soft, fuzzy edges</li>
                <li>• Soft surface soaks up sound</li>
                <li>• Wings are shaped for sneaking</li>
                <li>• Can fly without making any noise</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">🦴</span>
              <h3 className="text-lg font-bold text-purple-800 mb-3">Bendable Neck</h3>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Has 14 neck bones (people have 7)</li>
                <li>• Can turn head almost all the way around</li>
                <li>• Helps them look around since eyes can't move</li>
                <li>• Special blood tubes keep them safe</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-red-100 to-red-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">🦅</span>
              <h3 className="text-lg font-bold text-red-800 mb-3">Super Strong Claws</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Can squeeze really, really hard</li>
                <li>• One toe can flip backwards</li>
                <li>• Very sharp and curved</li>
                <li>• Perfect for catching and holding food</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">💀</span>
              <h3 className="text-lg font-bold text-yellow-800 mb-3">Special Head</h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Big space inside for a smart brain</li>
                <li>• Strong bones</li>
                <li>• Built just right for hearing and seeing</li>
                <li>• Helps process all the sounds and sights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Anatomy 