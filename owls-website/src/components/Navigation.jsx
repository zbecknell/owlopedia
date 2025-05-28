import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

function Navigation() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-900 text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group" onClick={closeMenu}>
            <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">🦉</span>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 dark:from-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
              Owlopedia
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              to="/habitat" 
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/habitat') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              Where They Live
            </Link>
            <Link 
              to="/behavior" 
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/behavior') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              How They Act
            </Link>
            <Link 
              to="/anatomy" 
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/anatomy') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              Body Parts
            </Link>
            <Link 
              to="/diet" 
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/diet') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              What They Eat
            </Link>
            <Link 
              to="/gallery" 
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/gallery') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              Pictures
            </Link>
            
            {/* Dark Mode Toggle - Desktop */}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="pt-4 pb-2 space-y-2">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/habitat" 
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/habitat') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              Where They Live
            </Link>
            <Link 
              to="/behavior" 
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/behavior') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              How They Act
            </Link>
            <Link 
              to="/anatomy" 
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/anatomy') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              Body Parts
            </Link>
            <Link 
              to="/diet" 
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/diet') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              What They Eat
            </Link>
            <Link 
              to="/gallery" 
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isActive('/gallery') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg' 
                  : 'text-gray-300 dark:text-gray-200 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              Pictures
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400"></div>
    </nav>
  )
}

export default Navigation 