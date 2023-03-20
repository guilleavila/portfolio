import { useEffect, useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Projects, Tech } from './components'
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

  return (
    <>
      <BrowserRouter>
        {preloader ? (
          <div>Loading</div>
        ) : (
          <div id="main-container" className="text-secondary relative z-0 bg-pattern bg-cover bg-repeat bg-center" data-scroll-container>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Tech />
            <Contact />
          </div>
        )}
      </BrowserRouter>
    </>
  )
}

export default App
