import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 min-h-screen transition-colors duration-500">
      {/* Header with side text and hero image */}
      <div className="flex flex-col lg:flex-row">
        {/* Left sidebar with text */}
        <div className="w-full lg:w-1/3 sidebar-section p-6 sm:p-8 lg:p-12 flex flex-col justify-center min-h-64 lg:min-h-96 relative overflow-hidden transition-colors duration-500">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-12 sm:w-16 h-12 sm:h-16 border-2 border-white dark:border-gray-300 rounded-full animate-float-slow transition-colors duration-500"></div>
            <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-10 sm:w-12 h-10 sm:h-12 border-2 border-white dark:border-gray-300 rounded-full animate-float-medium transition-colors duration-500"></div>
            <div className="absolute top-1/2 right-4 w-6 sm:w-8 h-6 sm:h-8 border-2 border-white dark:border-gray-300 rounded-full animate-float-fast transition-colors duration-500"></div>
          </div>
          
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6 leading-tight transition-colors duration-300">
              Owls are fascinating
            </h2>
            <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed transition-colors duration-300">
              Discover these amazing nocturnal birds and their incredible abilities
            </p>
          </div>
        </div>
        
        {/* Hero image section */}
        <div className="w-full lg:w-2/3 hero-section p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center min-h-64 lg:min-h-96 relative transition-colors duration-500">
          {/* Decorative elements */}
          <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-4 sm:w-6 h-4 sm:h-6 bg-amber-300 dark:bg-blue-400 rounded-full opacity-60 animate-float-gentle transition-colors duration-500"></div>
          <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 w-3 sm:w-4 h-3 sm:h-4 bg-orange-300 dark:bg-indigo-400 rounded-full opacity-60 animate-float-drift transition-colors duration-500"></div>
          <div className="absolute top-1/3 left-6 sm:left-8 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-300 dark:bg-purple-400 rounded-full opacity-60 animate-float-sway transition-colors duration-500"></div>
          
          <Link to="/gallery/great-horned-owl/hero" className="group">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-48 sm:h-60 lg:h-72 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-600 border-4 border-gray-700 dark:border-gray-300 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500">
              <img 
                src={`${import.meta.env.BASE_URL}owls/great-horned-owl/hero.png`}
                alt="Beautiful owl with striking orange eyes and detailed feather patterns" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </Link>
          
          <div className="text-center">
            <div className="inline-block px-4 sm:px-6 py-2 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-90 rounded-full shadow-md transition-colors duration-500">
              <span className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base transition-colors duration-300">Great Horned Owl</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Title and description section */}
      <div className="content-card mx-4 sm:mx-6 lg:mx-8 my-6 sm:my-8 px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 rounded-2xl transition-colors duration-500">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-gray-100 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Welcome to Owlopedia
        </h1>
        <p className="text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-200 leading-relaxed text-base sm:text-lg lg:text-xl transition-colors duration-300 px-4">
          Your complete guide to learning about owls! Discover how these amazing birds live, hunt, and raise their families in the wild.
        </p>
        
        {/* Decorative divider */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 dark:from-blue-400 dark:to-indigo-400 rounded-full transition-colors duration-500"></div>
        </div>
      </div>
      
      {/* Topic circles section */}
      <div className="px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800 dark:text-gray-100 transition-colors duration-300">Explore Owl Topics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
          <Link to="/habitat" className="text-center group">
            <div className="topic-circle mx-auto mb-3 sm:mb-4 relative w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 dark:from-blue-600 dark:to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-xl sm:text-2xl">🏠</span>
            </div>
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-blue-400 transition-colors block">Where They Live</span>
          </Link>
          <Link to="/behavior" className="text-center group">
            <div className="topic-circle mx-auto mb-3 sm:mb-4 relative w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 dark:from-blue-600 dark:to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-xl sm:text-2xl">🦉</span>
            </div>
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-blue-400 transition-colors block">How They Act</span>
          </Link>
          <Link to="/diet" className="text-center group">
            <div className="topic-circle mx-auto mb-3 sm:mb-4 relative w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 dark:from-blue-600 dark:to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-xl sm:text-2xl">🌙</span>
            </div>
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-blue-400 transition-colors block">What They Eat</span>
          </Link>
          <Link to="/gallery" className="text-center group">
            <div className="topic-circle mx-auto mb-3 sm:mb-4 relative w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 dark:from-blue-600 dark:to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-xl sm:text-2xl">📸</span>
            </div>
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-blue-400 transition-colors block">Pictures</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home