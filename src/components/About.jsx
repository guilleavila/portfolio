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
            gsap.fromTo(".word-span", { y: 30 }, { opacity: 1, y: 0, delay: 0.5, stagger: 0.05 })
        }
    }, [reveal])

    return (
        <section
            onMouseEnter={changeColorGreen}
            className={`${styles.paddingX} flex flex-row items-center relative w-full h-screen`}
            data-scroll-section>

            <p className={`${styles.sectionSubText}`} ref={ref}>
                {
                    aboutText.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} className='word-span' style={{ opacity: 0 }}>
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