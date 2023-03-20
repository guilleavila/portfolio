import gsap from "gsap"
import { useContext, useEffect, useRef } from "react"
import { MouseContext } from "../context/mouse.context"
import useOnScreen from "../hooks/useOnScreen"
import { styles } from "../styles"

const About = () => {

    const ref = useRef()

    const reveal = useOnScreen(ref)

    const { changeColorGreen } = useContext(MouseContext)

    useEffect(() => {
        if (reveal) {
            gsap.to("#about-title", { transform: "scale(1.5)" })
        }
    }, [reveal])

    return (
        <div onMouseEnter={changeColorGreen} className={`${styles.paddingX} flex items-center py-6 relative w-full h-screen bg-primary`} data-scroll-section>
            <h1 id="about-title" ref={ref} className={`${styles.heroHeadText}`}>SOY EL ABOUT</h1>
        </div >
    )
}

export default About