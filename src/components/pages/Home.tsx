import Contact from '../Contact'
import Hero from '../Hero'
import Mission from '../Mission'
import Gallery from './Gallery'
import Team from './Team'

const Home = () => {
  return (
    <div>
        <Hero />
        <Mission />
        <Team />
        <Gallery />
        <Contact />
    </div>
  )
}

export default Home