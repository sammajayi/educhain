import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog' // Make sure this file exists!
import Gallery from './components/pages/Gallery'
import Donate from './components/pages/Donate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-white overflow-x-hidden flex flex-col'>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donate" element={<Donate />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
