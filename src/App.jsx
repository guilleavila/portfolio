import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Works, Tech, Experiences } from './components'
import Footer from './components/Footer'
import { MouseContext } from './context/mouse.context'

function App() {

  const { changeColorGreen } = useContext(MouseContext)

  return (
    <>
      <BrowserRouter>
        <div id="main-container" className="text-secondary relative bg-cover bg-repeat-y bg-pattern bg-fixed" data-scroll-container>
          <Navbar />
          <Hero />
          <div
            onMouseEnter={changeColorGreen}>
            <About />
            <Works />
            <Experiences />
            <Tech />
            <Contact />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
