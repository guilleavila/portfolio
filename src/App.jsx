import useMouse from '@react-hook/mouse-position'
import { useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Mouse, Navbar, Projects, Tech } from './components'

function App() {

  const [color, setColor] = useState("secondary")

  const ref = useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  })

  let mouseXPosition = -10;
  let mouseYPosition = -10;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 24,
      width: 24,
      x: mouseXPosition - 12,
      y: mouseYPosition - 12
    }
  }

  const spring = {
    type: "spring",
    stiffness: 3000,
    damping: 100,
    mass: 0.1
  };

  const changeColorGreen = () => setColor("primary")
  const changeColorBlack = () => setColor("secondary")

  return (
    <BrowserRouter>
      <div className="text-secondary relative z-0 bg-pattern bg-cover bg-repeat bg-center" ref={ref}>
        <Mouse variants={variants} spring={spring} color={color} />
        <Navbar />
        <div onMouseEnter={changeColorBlack}>
          <Hero />
        </div>
        <div onMouseEnter={changeColorGreen} >
          <About />
          <Experience />
          <Projects />
          <Tech />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
