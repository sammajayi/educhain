import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'

function App() {


  return (
    <div className='min-h-screen bg-white overflow-x-hidden'>
      <Navbar />
      <div>
      <Home />
  
      <Footer />
      </div>
    </div>


  )
}

export default App
