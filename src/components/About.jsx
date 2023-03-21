import gsap from "gsap"
import { useContext, useEffect, useRef } from "react"
import { aboutText } from "../constants"
import { MouseContext } from "../context/mouse.context"
import useOnScreen from "../hooks/useOnScreen"
import { styles } from "../styles"
import TextSpan from "./TextSpan"

const About = () => {

    const { changeColorGreen } = useContext(MouseContext)

    const ref = useRef()
    const reveal = useOnScreen(ref)

    useEffect(() => {
        if (reveal) {
            gsap.fromTo("#about-title", { opacity: 0 }, { opacity: 1, transform: "scale(1.2)", delay: 0.5 })
        }
    }, [reveal])

    return (
        <section
            onMouseEnter={changeColorGreen}
            className={`${styles.paddingX} flex flex-row items-center relative w-full h-screen`}
            data-scroll-section>

            <p className={`${styles.sectionSubText}`}>
                {
                    aboutText.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex}>
                            {word.split('').map((letter, letterIndex) => {
                                return (
                                    <TextSpan key={letterIndex} br={false}>{letter}</TextSpan>
                                )
                            })}&nbsp;
                        </span>
                    ))
                }
            </p>
        </section >
    )
}

export default About