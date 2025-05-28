import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }
  
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🦉</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
              Owlopedia
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/habitat" 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/habitat') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Habitat
            </Link>
            <Link 
              to="/behavior" 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/behavior') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Behavior
            </Link>
            <Link 
              to="/anatomy" 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/anatomy') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Anatomy
            </Link>
            <Link 
              to="/diet" 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive('/diet') 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Diet
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400"></div>
    </nav>
  )
}

export default Navigation 