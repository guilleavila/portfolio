import gsap from "gsap"
import { useContext, useEffect, useRef } from "react"
import { MouseContext } from "../context/mouse.context"
import useOnScreen from "../hooks/useOnScreen"
import { styles } from "../styles"
import TextSpan from "./TextSpan"

const text = 'I am a Full Stack Developer and a UX Designer based in Madrid. I have a strong passion for creating immersive digital experiences, exploring and pushing the boundaries of what is possible.'

const About = () => {

    const ref = useRef()

    const reveal = useOnScreen(ref)

    const { changeColorGreen } = useContext(MouseContext)

    useEffect(() => {
        if (reveal) {
            gsap.fromTo("#about-title", { opacity: 0 }, { opacity: 1, transform: "scale(1.2)", delay: 0.5 })
        }
    }, [reveal])

    return (
        <section
            onMouseEnter={changeColorGreen}
            className={`${styles.paddingX} flex flex-row items-center relative w-full h-screen max-w-7xl mx-auto`}
            data-scroll-section>

            <h1 id="about-title" ref={ref} className={`${styles.sectionHeadText} basis-2/6`}>ABOUT</h1>

            <p className={`${styles.sectionSubText} basis-4/6`}>

                {
                    text.split(' ').map((word, wordIndex) => (

                        <span>&nbsp;
                            {word.split('').map((letter, letterIndex) => {
                                return (
                                    <TextSpan key={letterIndex} br={false}>{letter}</TextSpan>
                                )
                            })}
                        </span>
                    ))
                }

            </p>

            {/* <p>I am a Full Stack Developer and a UX Designer based in Madrid.
                I have a strong passion for creating immersive digital experiences,
                exploring and pushing the boundaries of what is possible.</p> */}

        </section >
    )
}

export default About