import gsap from "gsap"
import { LayoutGroup } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { isMobile } from "react-device-detect"

import Project from "./Project"
import Button from "./Button"
import useOnScreen from "../hooks/useOnScreen"
import { projects } from "../constants"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"

const Works = () => {

    const [animated, setAnimated] = useState(false)
    const [openedId, setOpenedId] = useState(null)

    const ref = useRef()
    const reveal = useOnScreen(ref)

    useEffect(() => {
        if (reveal && !animated) {
            setAnimated(true)
            gsap.fromTo(".project", { y: 50 }, { opacity: 1, y: 0, stagger: 0.2, delay: 0.7, ease: "power4.out" })
        }
    }, [reveal])

    return (
        <section className={`${styles.paddingX} flex flex-wrap justify-between items-start mb-60`}>
            <div className="flex-grow-0 md:basis-3/6">
                <h2 className={`${styles.sectionHeadText}`}>WORKS</h2>
                {
                    !isMobile && (
                        <>
                            <p className="font-light text-tertiary max-w-[80%] mt-10 mb-5">
                                This is a selection of some of the personal projects I have been working on recently. However, you can find some more in my github profile.
                            </p>
                            <Button href="https://www.github.com/guilleavila" src={github} alt="github-logo">Github</Button>
                        </>
                    )
                }
            </div>

            <ul ref={ref} className="md:basis-3/6 mt-10 md:mt-0">
                <LayoutGroup>
                    {projects.map((project) => (
                        <div key={project.name} className="project opacity-0 relative z-20">
                            <Project {...project} openedId={openedId} setOpenedId={setOpenedId} />
                        </div>
                    ))}
                </LayoutGroup>
            </ul>

        </section>
    )
}

export default SectionWrapper(Works, "works")