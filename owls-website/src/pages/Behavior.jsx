function Behavior() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            How Owls Act
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Learn about all the cool things owls do and how they live their lives!
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 dark:from-blue-400 dark:to-indigo-400 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Hunting and Feeding */}
          <div className="content-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🎯</span>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">How Owls Hunt for Food</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
              <p>
                Owls are super good hunters! They have special body parts and skills that help them catch food when it's dark outside.
              </p>
              <div className="space-y-3">
                <div className="bg-amber-100 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-amber-400 dark:border-blue-400">
                  <h4 className="font-semibold text-amber-800 dark:text-blue-300 mb-2">Super Quiet Flying</h4>
                  <p className="text-amber-700 dark:text-blue-200 text-sm">Owls have special soft feathers that let them fly without making any sound at all!</p>
                </div>
                <div className="bg-orange-100 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-orange-400 dark:border-indigo-400">
                  <h4 className="font-semibold text-orange-800 dark:text-indigo-300 mb-2">Amazing Hearing</h4>
                  <p className="text-orange-700 dark:text-indigo-200 text-sm">Owls can hear tiny sounds and know exactly where they come from, even in the dark.</p>
                </div>
                <div className="bg-yellow-100 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-400 dark:border-purple-400">
                  <h4 className="font-semibold text-yellow-800 dark:text-purple-300 mb-2">Super Strong Claws</h4>
                  <p className="text-yellow-700 dark:text-purple-200 text-sm">Their sharp claws can squeeze really hard to catch and hold onto their food.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Defense Mechanisms */}
          <div className="content-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🛡️</span>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">How Owls Stay Safe</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
              <p>
                Even though owls are good hunters, they still need to protect themselves from bigger animals that might want to hurt them.
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-amber-500 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Hiding:</strong> Their feathers look like tree bark so they can hide really well</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Looking scary:</strong> They puff up their feathers and spread their wings to look bigger</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Working together:</strong> Sometimes many owls team up to chase away danger</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span><strong>Being active at night:</strong> Most dangerous animals sleep at night, so owls are safer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sleep and Activity Patterns */}
        <div className="content-card p-8 rounded-2xl mb-12">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">😴</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">When Owls Sleep and Wake Up</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">How Owls Sleep</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-200">
                <p>Owls sleep during the day when the sun is out. They find safe, hidden places to rest.</p>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                    <li>• Sleep 12-14 hours every day</li>
                    <li>• Hide in thick trees or tree holes</li>
                    <li>• Sleep lightly so they can wake up fast</li>
                    <li>• Some owls sleep standing on one foot</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">When Owls Are Active</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-200">
                <p>Most owls are busiest when the sun goes down and when it comes back up.</p>
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                    <li>• Best hunting time: 2 hours after sunset</li>
                    <li>• Also active before sunrise</li>
                    <li>• Make lots of sounds at night</li>
                    <li>• Bad weather makes them less active</li>
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
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">How Owls Take Care of Their Babies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🥚</span>
              <h3 className="text-lg font-bold text-pink-800 dark:text-pink-300 mb-3">Making Nests</h3>
              <p className="text-pink-700 dark:text-pink-200 text-sm leading-relaxed">
                Mom owls lay 2-8 eggs and sit on them for about one month. Dad owl brings food and keeps them safe.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🐣</span>
              <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-3">Feeding Baby Owls</h3>
              <p className="text-green-700 dark:text-green-200 text-sm leading-relaxed">
                Both parents work together to bring food to their babies every few hours, bringing small animals to eat.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg">
              <span className="text-4xl mb-4 block">🦅</span>
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3">Learning to Fly</h3>
              <p className="text-blue-700 dark:text-blue-200 text-sm leading-relaxed">
                Young owls leave the nest after 6-10 weeks but still need their parents to help them for a few more weeks.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Behaviors */}
        <div className="content-card p-8 rounded-2xl">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🎭</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Other Cool Things Owls Do</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🗣️</span>
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Talking to Each Other</h4>
              <p className="text-amber-700 dark:text-amber-200 text-xs">Owls make different sounds like hoots and screeches to talk to other owls and warn about danger.</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🏠</span>
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Protecting Their Home</h4>
              <p className="text-orange-700 dark:text-orange-200 text-xs">Most owls don't like other owls in their territory and will chase them away from their hunting spots.</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🔄</span>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Turning Their Head</h4>
              <p className="text-yellow-700 dark:text-yellow-200 text-xs">Owls can turn their heads almost all the way around because they have more neck bones than people do.</p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🌨️</span>
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Changing with Seasons</h4>
              <p className="text-green-700 dark:text-green-200 text-xs">Some owls fly to warmer places in winter, while others grow thicker feathers to stay warm.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Behavior 