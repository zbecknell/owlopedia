import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Habitat from './pages/Habitat'
import Behavior from './pages/Behavior'
import Anatomy from './pages/Anatomy'
import Diet from './pages/Diet'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitat" element={<Habitat />} />
          <Route path="/behavior" element={<Behavior />} />
          <Route path="/anatomy" element={<Anatomy />} />
          <Route path="/diet" element={<Diet />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
