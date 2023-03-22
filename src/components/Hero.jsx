import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { useContext, useEffect, useRef } from "react"
import { heroText } from "../constants"
import { styles } from "../styles"
import TextSpan from "./TextSpan"

import ScrollTrigger from 'gsap/ScrollTrigger'
import { MouseContext } from "../context/mouse.context"
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const ref = useRef(null)

    const { changeColorBlack } = useContext(MouseContext)

    const { scrollYProgress } = useScroll()
    const top = useTransform(scrollYProgress, [0, 1], ['-50vh', '-100vh'])
    const scale = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%'])

    useEffect(() => {
        gsap.fromTo("#hero-title", 0.3, { opacity: 0, y: '10vh' }, { opacity: 1, delay: 0.3, y: '0vh' })
        gsap.fromTo("#hero-p", 0.3, { opacity: 0, y: '10vh' }, { opacity: 1, delay: 0.4, y: '0vh' })
    }, [])

    return (
        <section ref={ref} id="hero-container"
            data-scroll-section
            onMouseEnter={changeColorBlack}
            className={`${styles.paddingX} flex items-center py-6 relative z-0 w-full h-screen overflow-hidden`}>

            <motion.div
                className="bg-primary w-[200vw] h-[200vh] absolute top-[-100vh] right-[-50vw] z-[-20] rounded-full"
                style={{ top, scale }}
            />

            <div className={`w-full flex flex-col justify-between items-start max-w-7xl m-0`}>
                <motion.h1 id="hero-title" className={`${styles.heroHeadText}`} style={{ opacity }} data-scroll>
                    {heroText.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex}>
                            {word.split('').map((letter, letterIndex) => {
                                return (
                                    (wordIndex === 1 && letterIndex === 0)
                                        ? <TextSpan key={letterIndex} br={true}>{letter}</TextSpan>
                                        : <TextSpan key={letterIndex} br={false}>{letter}</TextSpan>
                                )
                            })}&nbsp;
                        </span>
                    ))}
                </motion.h1>

                <motion.p id="hero-p" style={{ opacity }} className={`${styles.heroSubText} mt-[10vh]`} data-scroll>Fullstack Developer & UX Designer</motion.p>

            </div>
        </section>
    )
}

export default Hero