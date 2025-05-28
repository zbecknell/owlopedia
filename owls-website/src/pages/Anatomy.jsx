function Anatomy() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Owl Anatomy & Biology
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore the remarkable anatomy and biological adaptations that make owls such extraordinary predators
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Overall Anatomy Overview */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🔬</span>
            <h2 className="text-3xl font-bold text-gray-800">Overall Anatomy & Biology</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Owls possess a unique combination of anatomical features that have evolved specifically for nocturnal hunting. 
                Their bodies are perfectly designed for silent flight, precise hearing, and exceptional vision in low-light conditions.
              </p>
              <p>
                As birds of prey (raptors), owls belong to the order Strigiformes and share many characteristics with other 
                raptors while maintaining distinct adaptations that set them apart from hawks, eagles, and falcons.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Biological Facts</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Order: Strigiformes (owls)</li>
                <li>• Over 200 species worldwide</li>
                <li>• Found on every continent except Antarctica</li>
                <li>• Carnivorous predators</li>
                <li>• Mostly nocturnal or crepuscular</li>
                <li>• Excellent binocular vision</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Size and Physical Dimensions */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">📏</span>
            <h2 className="text-3xl font-bold text-gray-800">Size & Physical Dimensions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">📐</span>
              <h3 className="text-lg font-bold text-green-800 mb-3">Height & Length</h3>
              <div className="text-green-700 text-sm space-y-2">
                <p><strong>Smallest:</strong> Elf Owl - 5 inches (13 cm)</p>
                <p><strong>Largest:</strong> Great Horned Owl - 25 inches (64 cm)</p>
                <p><strong>Average:</strong> 8-20 inches (20-51 cm)</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">⚖️</span>
              <h3 className="text-lg font-bold text-purple-800 mb-3">Weight</h3>
              <div className="text-purple-700 text-sm space-y-2">
                <p><strong>Smallest:</strong> Elf Owl - 1.4 oz (40g)</p>
                <p><strong>Largest:</strong> Eagle Owl - 10 lbs (4.5 kg)</p>
                <p><strong>Average:</strong> 4 oz - 3 lbs (113g - 1.4 kg)</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🦅</span>
              <h3 className="text-lg font-bold text-orange-800 mb-3">Wingspan</h3>
              <div className="text-orange-700 text-sm space-y-2">
                <p><strong>Smallest:</strong> Elf Owl - 15 inches (38 cm)</p>
                <p><strong>Largest:</strong> Great Grey Owl - 60 inches (152 cm)</p>
                <p><strong>Average:</strong> 20-48 inches (51-122 cm)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lifespan Information */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">⏰</span>
            <h2 className="text-3xl font-bold text-gray-800">Lifespan & Life Cycle</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Average Lifespan</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">In the Wild</h4>
                  <p className="text-amber-700 text-sm">Most owl species live 4-10 years in their natural habitat, though this varies significantly by species and environmental factors.</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">In Captivity</h4>
                  <p className="text-blue-700 text-sm">With proper care, owls can live 15-25 years in captivity, with some species reaching up to 30 years.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Life Stages</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-pink-100 rounded-lg">
                  <span className="text-2xl mr-3">🥚</span>
                  <div>
                    <h4 className="font-semibold text-pink-800">Egg Stage</h4>
                    <p className="text-pink-700 text-xs">28-35 days incubation period</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-yellow-100 rounded-lg">
                  <span className="text-2xl mr-3">🐣</span>
                  <div>
                    <h4 className="font-semibold text-yellow-800">Nestling</h4>
                    <p className="text-yellow-700 text-xs">6-10 weeks in nest, dependent on parents</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-100 rounded-lg">
                  <span className="text-2xl mr-3">🦅</span>
                  <div>
                    <h4 className="font-semibold text-green-800">Juvenile</h4>
                    <p className="text-green-700 text-xs">Learning to hunt, 3-6 months with parents</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                  <span className="text-2xl mr-3">🦉</span>
                  <div>
                    <h4 className="font-semibold text-blue-800">Adult</h4>
                    <p className="text-blue-700 text-xs">Sexual maturity at 1-2 years</p>
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
            <h2 className="text-3xl font-bold text-gray-800">How Owls Breathe</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Owls have a highly efficient respiratory system similar to other birds, featuring a unique 
                one-way airflow system that maximizes oxygen extraction during both inhalation and exhalation.
              </p>
              <div className="bg-gradient-to-r from-cyan-100 to-cyan-200 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">Air Sacs System</h4>
                <p className="text-cyan-700 text-sm">
                  Nine air sacs work with the lungs to create continuous airflow, providing constant 
                  oxygen supply even during the demanding flight required for hunting.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Breathing Process</h3>
              <div className="space-y-3">
                <div className="flex items-start p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <span className="text-blue-600 font-bold mr-3">1.</span>
                  <div>
                    <h4 className="font-semibold text-blue-800">Inhalation</h4>
                    <p className="text-blue-700 text-sm">Air enters through nostrils and flows to posterior air sacs</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <span className="text-green-600 font-bold mr-3">2.</span>
                  <div>
                    <h4 className="font-semibold text-green-800">First Exhalation</h4>
                    <p className="text-green-700 text-sm">Air moves from air sacs through lungs for gas exchange</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <span className="text-purple-600 font-bold mr-3">3.</span>
                  <div>
                    <h4 className="font-semibold text-purple-800">Second Inhalation</h4>
                    <p className="text-purple-700 text-sm">Used air moves to anterior air sacs</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <span className="text-orange-600 font-bold mr-3">4.</span>
                  <div>
                    <h4 className="font-semibold text-orange-800">Final Exhalation</h4>
                    <p className="text-orange-700 text-sm">Air exits through the trachea and out of the body</p>
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
            <h2 className="text-3xl font-bold text-gray-800">Unique Physical Characteristics</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">👁️</span>
              <h3 className="text-lg font-bold text-amber-800 mb-3">Extraordinary Eyes</h3>
              <ul className="text-amber-700 text-sm space-y-1">
                <li>• Eyes are 100x more sensitive than human eyes</li>
                <li>• Cannot move eyes in sockets - must turn head</li>
                <li>• Tubular shape maximizes light gathering</li>
                <li>• Forward-facing for excellent depth perception</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">👂</span>
              <h3 className="text-lg font-bold text-green-800 mb-3">Asymmetrical Ears</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Ear openings at different heights</li>
                <li>• Creates 3D sound map for precise location</li>
                <li>• Can hear prey moving under snow</li>
                <li>• Facial disc acts as sound collector</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">🪶</span>
              <h3 className="text-lg font-bold text-blue-800 mb-3">Silent Flight Feathers</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Soft fringed edges reduce turbulence</li>
                <li>• Velvety surface absorbs sound</li>
                <li>• Specialized wing shape for stealth</li>
                <li>• Completely silent approach to prey</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">🦴</span>
              <h3 className="text-lg font-bold text-purple-800 mb-3">Flexible Neck</h3>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• 14 neck vertebrae (humans have 7)</li>
                <li>• Can rotate head 270 degrees</li>
                <li>• Compensates for fixed eye position</li>
                <li>• Enhanced blood vessel system prevents stroke</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-red-100 to-red-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">🦅</span>
              <h3 className="text-lg font-bold text-red-800 mb-3">Powerful Talons</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Grip strength up to 300 PSI</li>
                <li>• Zygodactyl feet (reversible outer toe)</li>
                <li>• Razor-sharp curved claws</li>
                <li>• Specialized for grasping and killing prey</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl shadow-lg">
              <span className="text-3xl mb-4 block">💀</span>
              <h3 className="text-lg font-bold text-yellow-800 mb-3">Skull Adaptations</h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Large brain case for processing sensory data</li>
                <li>• Reinforced skull structure</li>
                <li>• Specialized bone density</li>
                <li>• Optimized for enhanced hearing and vision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Anatomy 