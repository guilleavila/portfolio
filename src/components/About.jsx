import useOnScreen from "../hooks/useOnScreen"
import gsap from "gsap"
import TextSpan from "./TextSpan"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { aboutText } from "../constants"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"

const About = () => {

    const ref = useRef()
    const reveal = useOnScreen(ref)

    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        if (reveal && !animated) {
            setAnimated(true)
            gsap.fromTo(".word-span", { y: 30 }, { opacity: 1, y: 0, delay: 0.5, stagger: 0.05 })
        }
    }, [reveal])

    return (
        <motion.section
            className={`${styles.paddingX} flex flex-row items-center relative w-full h-screen`}
            data-scroll-section>

            <p className={`${styles.sectionSubText}`} ref={ref}>
                {aboutText.split(' ').map((word, wordIndex) => (
                    <span key={wordIndex} className="word-span" style={{ opacity: 0 }}>
                        {word.split('').map((letter, letterIndex) => {
                            return (
                                <TextSpan key={letterIndex} br={false}>{letter}</TextSpan>
                            )
                        })}&nbsp;
                    </span>
                ))}
            </p>
        </motion.section>

    )
}

export default SectionWrapper(About, "about")