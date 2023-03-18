import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Projects, Tech } from './components'

function App() {

  return (
    <BrowserRouter>
      <div className="text-secondary relative z-0 bg-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Tech />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
