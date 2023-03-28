import { LayoutGroup } from "framer-motion"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { isMobile } from "react-device-detect"

import { linkedin } from "../assets"
import { experiences } from "../constants"
import useOnScreen from "../hooks/useOnScreen"
import { styles } from "../styles"
import Button from "./Button"
import WorkExperience from "./WorkExperience"

const Experiences = () => {

    const [animated, setAnimated] = useState(false)
    const [openedId, setOpenedId] = useState(null)

    const ref = useRef(null)
    const reveal = useOnScreen(ref)

    useEffect(() => {
        if (reveal && !animated) {
            setAnimated(true)
            gsap.fromTo(".experience", { y: 50 }, { opacity: 1, y: 0, stagger: 0.2, delay: 0.7, ease: "power4.out" })
        }
    }, [reveal])

    return (
        <section className={`${styles.paddingX} flex flex-wrap justify-between items-start mb-60`}>
            <div className="flex-grow-0 md:basis-3/6">
                <h2 className={`${styles.sectionHeadText}`}>EXPERIENCE</h2>
                {
                    !isMobile && (
                        <>

                            <p className="font-light text-tertiary max-w-[80%] mt-10 mb-5">
                                My latest working experiences.
                            </p>
                            <Button href="https://www.linkedin.com/in/guillermo-%C3%A1vila/" src={linkedin} alt="linkedin-logo">LinkedIn</Button>

                        </>
                    )
                }
            </div>

            <ul ref={ref} className="md:basis-3/6 mt-10 md:mt-0">
                <LayoutGroup>
                    {experiences.map((experience) => (
                        <div key={experience.company_name} className="experience opacity-0 relative z-20">
                            <WorkExperience {...experience} openedId={openedId} setOpenedId={setOpenedId} />
                        </div>
                    ))}
                </LayoutGroup>
            </ul>

        </section>
    )
}

export default Experiences