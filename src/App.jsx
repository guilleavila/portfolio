import { useContext, useEffect, useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Hero, Navbar, Works, Tech, Experiences } from './components'
import Footer from './components/Footer'
import { MouseContext } from './context/mouse.context'
import useLocoScroll from './hooks/useLocoScroll'

function App() {

  // preloader logic
  const [preloader, setPreloader] = useState(true)
  const [timer, setTimer] = useState(1)

  const intervalId = useRef(null)

  const clear = () => {
    window.clearInterval(intervalId.current)
    setPreloader(false)
  }

  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (timer < 0) {
      clear()
    }
  }, [timer])

  useLocoScroll(!preloader)

  const { changeColorGreen } = useContext(MouseContext)

  return (
    <>
      <BrowserRouter>
        {preloader ? (
          <div>Loading</div>
        ) : (
          <div id="main-container" className="text-secondary relative bg-pattern bg-cover bg-fixed bg-center" data-scroll-container>
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
        )}
      </BrowserRouter>
    </>
  )
}

export default App
