import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Habitat from './pages/Habitat'
import Behavior from './pages/Behavior'
import Anatomy from './pages/Anatomy'
import Diet from './pages/Diet'
import Gallery from './pages/Gallery'
import ImageViewer from './pages/ImageViewer'

function App() {
  // Get the base path for GitHub Pages deployment
  const basename = import.meta.env.PROD ? '/owlopedia' : ''
  
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitat" element={<Habitat />} />
          <Route path="/behavior" element={<Behavior />} />
          <Route path="/anatomy" element={<Anatomy />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:owlId/:imageType" element={<ImageViewer />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
