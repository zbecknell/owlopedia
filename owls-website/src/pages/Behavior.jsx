function Behavior() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Owl Behavior
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the fascinating behaviors and adaptations of these remarkable nocturnal hunters
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Hunting and Feeding */}
          <div className="content-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🎯</span>
              <h2 className="text-3xl font-bold text-gray-800">Hunting & Feeding</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Owls are masterful predators with specialized adaptations that make them incredibly effective hunters in low-light conditions.
              </p>
              <div className="space-y-3">
                <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-400">
                  <h4 className="font-semibold text-amber-800 mb-2">Silent Flight</h4>
                  <p className="text-amber-700 text-sm">Special feather structures allow owls to fly completely silently, giving them a crucial advantage when approaching prey.</p>
                </div>
                <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 mb-2">Exceptional Hearing</h4>
                  <p className="text-orange-700 text-sm">Asymmetrical ear placement helps owls pinpoint prey location with incredible accuracy, even in complete darkness.</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-2">Powerful Talons</h4>
                  <p className="text-yellow-700 text-sm">Sharp, curved talons can exert pressure of up to 300 pounds per square inch, ensuring a secure grip on prey.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Defense Mechanisms */}
          <div className="content-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🛡️</span>
              <h2 className="text-3xl font-bold text-gray-800">Defense Strategies</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Despite being skilled predators, owls have developed various strategies to protect themselves from larger predators and threats.
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span><strong>Camouflage:</strong> Mottled feather patterns help owls blend seamlessly with tree bark and surroundings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span><strong>Intimidation displays:</strong> Puffing up feathers and spreading wings to appear larger when threatened</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span><strong>Mobbing behavior:</strong> Working together to drive away larger predators from nesting areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-1">•</span>
                  <span><strong>Nocturnal lifestyle:</strong> Being active at night reduces encounters with many diurnal predators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sleep and Activity Patterns */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">😴</span>
            <h2 className="text-3xl font-bold text-gray-800">Sleep & Activity Patterns</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sleeping Habits</h3>
              <div className="space-y-3 text-gray-700">
                <p>Owls are primarily nocturnal, sleeping during daylight hours in secure, hidden locations.</p>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm">
                    <li>• Sleep 12-14 hours during the day</li>
                    <li>• Roost in dense foliage or tree cavities</li>
                    <li>• Enter light sleep states to remain alert</li>
                    <li>• Some species sleep standing on one leg</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Activity Cycles</h3>
              <div className="space-y-3 text-gray-700">
                <p>Most owl species are crepuscular, being most active during dawn and dusk hours.</p>
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm">
                    <li>• Peak hunting: 2 hours after sunset</li>
                    <li>• Secondary activity: Pre-dawn hours</li>
                    <li>• Territorial calling at night</li>
                    <li>• Weather affects activity levels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parental Care */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">👨‍👩‍👧‍👦</span>
            <h2 className="text-3xl font-bold text-gray-800">Parental Care</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🥚</span>
              <h3 className="text-lg font-bold text-pink-800 mb-3">Nesting</h3>
              <p className="text-pink-700 text-sm leading-relaxed">
                Female owls lay 2-8 eggs and incubate them for 28-35 days while males provide food and protection.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🐣</span>
              <h3 className="text-lg font-bold text-green-800 mb-3">Feeding Young</h3>
              <p className="text-green-700 text-sm leading-relaxed">
                Parents work together to feed owlets every 1-3 hours, bringing small prey items to the nest.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🦅</span>
              <h3 className="text-lg font-bold text-blue-800 mb-3">Fledging</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                Young owls leave the nest at 6-10 weeks but continue to depend on parents for several more weeks.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Behaviors */}
        <div className="content-card p-8 rounded-2xl">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🎭</span>
            <h2 className="text-3xl font-bold text-gray-800">Additional Behaviors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🗣️</span>
              <h4 className="font-semibold text-amber-800 mb-2">Communication</h4>
              <p className="text-amber-700 text-xs">Owls use various hoots, screeches, and calls to communicate territory, attract mates, and warn of danger.</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🏠</span>
              <h4 className="font-semibold text-orange-800 mb-2">Territory</h4>
              <p className="text-orange-700 text-xs">Most owls are territorial and will defend their hunting grounds from other owls of the same species.</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🔄</span>
              <h4 className="font-semibold text-yellow-800 mb-2">Head Rotation</h4>
              <p className="text-yellow-700 text-xs">Owls can rotate their heads up to 270 degrees due to having 14 neck vertebrae (humans have 7).</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🌨️</span>
              <h4 className="font-semibold text-green-800 mb-2">Seasonal Behavior</h4>
              <p className="text-green-700 text-xs">Some species migrate seasonally, while others adapt their behavior to survive harsh winter conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Behavior 