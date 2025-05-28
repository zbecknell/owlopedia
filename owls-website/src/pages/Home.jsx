function Home() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen">
      {/* Header with side text and hero image */}
      <div className="flex">
        {/* Left sidebar with text */}
        <div className="w-1/3 sidebar-section p-12 flex flex-col justify-center min-h-96 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full animate-float-slow"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-white rounded-full animate-float-medium"></div>
            <div className="absolute top-1/2 right-4 w-8 h-8 border-2 border-white rounded-full animate-float-fast"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
              Owls are fascinating
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Discover these amazing nocturnal birds and their incredible abilities
            </p>
          </div>
        </div>
        
        {/* Hero image section */}
        <div className="w-2/3 hero-section p-12 flex flex-col justify-center items-center min-h-96 relative">
          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-6 h-6 bg-amber-300 rounded-full opacity-60 animate-float-gentle"></div>
          <div className="absolute bottom-12 left-12 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-float-drift"></div>
          <div className="absolute top-1/3 left-8 w-3 h-3 bg-yellow-300 rounded-full opacity-60 animate-float-sway"></div>
          
          <div className="w-full max-w-lg h-72 bg-gradient-to-br from-amber-100 to-amber-200 border-4 border-gray-700 rounded-2xl flex items-center justify-center mb-6 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img 
              src="hero.png" 
              alt="Beautiful owl with striking orange eyes and detailed feather patterns" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-white bg-opacity-80 rounded-full shadow-md">
              <span className="text-gray-700 font-medium">Great Horned Owl</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Title and description section */}
      <div className="content-card mx-8 my-8 px-12 py-16 rounded-2xl">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Welcome to Owlopedia
        </h1>
        <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed text-xl">
          Your complete guide to learning about owls! Discover how these amazing birds live, hunt, and raise their families in the wild.
        </p>
        
        {/* Decorative divider */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
        </div>
      </div>
      
      {/* Topic circles section */}
      <div className="px-12 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore Owl Topics</h2>
        <div className="flex justify-center space-x-12">
          <div className="text-center group">
            <div className="topic-circle mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-2xl">🏠</span>
            </div>
            <span className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">Habitat</span>
          </div>
          <div className="text-center group">
            <div className="topic-circle mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-2xl">🦉</span>
            </div>
            <span className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">Behavior</span>
          </div>
          <div className="text-center group">
            <div className="topic-circle mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-2xl">🌙</span>
            </div>
            <span className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">Hunting</span>
          </div>
          <div className="text-center group">
            <div className="topic-circle mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-2xl">🥚</span>
            </div>
            <span className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">Nesting</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home