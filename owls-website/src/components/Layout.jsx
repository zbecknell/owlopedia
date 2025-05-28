import Navigation from './Navigation'
import DarkModeDebug from './DarkModeDebug'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <Navigation />
      <main>
        {children}
      </main>
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-900 text-white py-8 sm:py-12 mt-8 sm:mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-amber-300 to-orange-300 dark:from-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
              Owlopedia
            </h3>
            <p className="text-gray-300 dark:text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
              Your complete guide to understanding owls and their amazing world
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center space-x-4 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-amber-400 dark:bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-orange-400 dark:bg-indigo-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-yellow-400 dark:bg-purple-400 rounded-full animate-pulse delay-150"></div>
            </div>
            
            <div className="border-t border-gray-700 dark:border-gray-600 pt-4 sm:pt-6">
              <p className="text-gray-400 dark:text-gray-300 text-xs sm:text-sm px-4">
                © {new Date().getFullYear()} Owlopedia. Educational content for nature enthusiasts 🦉
              </p>
            </div>
          </div>
        </div>
      </footer>
      <DarkModeDebug />
    </div>
  )
}

export default Layout 