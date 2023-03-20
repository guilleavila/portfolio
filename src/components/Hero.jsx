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

    useEffect(() => {
        // text animations
        gsap.fromTo("#hero-title", 0.3, { opacity: 0, y: '10vh' }, { opacity: 1, delay: 0.3, y: '0vh' })
        gsap.fromTo("#hero-p", 0.3, { opacity: 0, y: '10vh' }, { opacity: 1, delay: 0.4, y: '0vh' })

        // scroll trigger
        // gsap.to("#hero-container", {
        //     ease: "none",
        //     scrollTrigger: {
        //         start: "top top",
        //         trigger: ref.current,
        //         scroll: "#main-container",
        //         pin: true,
        //         scrub: 0.5,
        //         end: () => `+=${ref.current.offsetHeight}`
        //     }
        // })

    }, [])

    return (
        <section ref={ref} id="hero-container"
            data-scroll-section
            onMouseEnter={changeColorBlack}
            className={`${styles.paddingX} flex items-center py-6 relative w-full h-screen`}>

            <div className={`w-full flex flex-col justify-between items-start max-w-7xl mx-auto`}>

                <h1 id="hero-title" className={`${styles.heroHeadText}`} data-scroll>
                    {
                        heroText.split('').map((letter, letterIndex) => {
                            return (
                                letterIndex === 4
                                    ? <TextSpan key={letterIndex} br={true}>{letter}</TextSpan>
                                    : <TextSpan key={letterIndex} br={false}>{letter}</TextSpan>
                            )
                        })
                    }
                </h1>

                <p id="hero-p" className={`${styles.heroSubText} fixed bottom-20`} data-scroll>Frontend Developer & UX Designer</p>

            </div>
        </section >
    )
}

export default Hero


// const { scrollYProgress, scrollY } = useScroll()

// const right = useTransform(scrollYProgress, [1, 0], ['100vw', '0vw'])
// const borderRadius = useTransform(scrollYProgress, [1, 0], ['100%', '0%'])

{/* <motion.div
                    className="bg-primary w-full h-screen absolute top-[0vw] right-[0vw] z-[-20]"
                    // initial={{ scale: 1 }}
                    // animate={{ left: '-100vw' }}
                    style={{ right, borderRadius }}
                /> */}