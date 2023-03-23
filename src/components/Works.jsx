import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { projects } from "../constants"
import { styles } from "../styles"
import Project from "./Project"
import useOnScreen from "../hooks/useOnScreen"
import gsap from "gsap"

const Works = () => {

    const ref = useRef()
    const reveal = useOnScreen(ref)

    useEffect(() => {
        if (reveal) {
            gsap.fromTo(".project", { y: 50 }, { opacity: 1, y: 0, stagger: 0.2, delay: 0.7, ease: "power4.out" })
        }
    }, [reveal])

    return (
        <section className={`${styles.paddingX} flex flex-wrap justify-start items-center md:h-screen`}>
            <h2 className={`${styles.sectionHeadText} md:basis-3/6`}>WORKS</h2>
            <ul ref={ref} className="md:basis-3/6 mt-10 md:mt-0">
                {projects.map((project) => (
                    <div key={project.name} className="project opacity-0 relative z-20">
                        <Project {...project} />
                    </div>
                ))}
            </ul>
        </section>
    )
}

export default Works