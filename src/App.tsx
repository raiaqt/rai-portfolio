import Description from './pages/Description/Description'
import Introduction from './pages/Introduction/Introduction'
import Projects from './pages/Projects/Projects'
import Background from './pages/Background/Background'
import Contact from './pages/Contact/Contact'
import ParticleBackground from './components/ParticleBackground/ParticleBackground'
import Footer from './components/Footer/Footer'

import './App.css'
import DnaBackground from './components/DnaBackground/DnaBackground'

function App() {

  return (
    <>
    {/* <DnaBackground /> */}
      <ParticleBackground />
      <Introduction />
      <Description />
      <Projects />
      <Background />
      <Contact />
      <Footer />
    </>
  )
}

export default App
