import gsap from "gsap"
import { useEffect, useRef } from "react"
import useOnScreen from "../hooks/useOnScreen"
import { styles } from "../styles"
import TechCard from "./TechCard"


const Tech = () => {

    const ref = useRef(null)
    const reveal = useOnScreen(ref)

    useEffect(() => {
        const elements = document.getElementById("cards")
        gsap.set(elements.children, { opacity: 0 })
        if (reveal) {
            gsap.fromTo(elements.children, { y: 50 }, { opacity: 1, y: 0, stagger: 0.2, delay: 0.3, ease: "power4.out" })
        }
    }, [reveal])

    return (
        <section className={`${styles.paddingX} mb-[70vh]`}>
            <h3 className={`${styles.sectionHeadText}`}>SKILLS</h3>

            <div ref={ref} id="cards" className="cards flex flex-wrap justify-between items-start gap-10">
                <TechCard type="frontend" />
                <TechCard type="backend" />
                <TechCard type="design" />
            </div>
        </section>
    )
}

export default Tech