import { useContext, useEffect, useRef, useState } from "react"
import gsap from "gsap"

import { styles } from "../styles"
import useOnScreen from "../hooks/useOnScreen"
import { MouseContext } from "../context/mouse.context"
import ContactForm from "./ContactForm"

const Contact = () => {

    const ref = useRef(null)
    const reveal = useOnScreen(ref)

    useEffect(() => {
        if (reveal) {
            gsap.to("#contact-bg", { top: 0, opacity: 1, y: 0, borderRadius: "0%", ease: "power4.out", duration: 1 })
        } else {
            gsap.to("#contact-bg", { top: "100vh", opacity: 0, y: 0, borderRadius: "100%", ease: "power4.out", duration: 1 })
        }
    }, [reveal])

    const { changeColorBlack } = useContext(MouseContext)

    return (
        <section ref={ref} >
            <div
                id="contact-bg"
                className="bg-primary w-[100vw] h-[100vh] fixed top-100 right-0 rounded-full z-0"
            />

            <div
                className={`${styles.paddingX} h-screen flex flex-wrap justify-between items-center relative z-20`}
                onMouseEnter={changeColorBlack}
            >
                <h2 className={`${styles.sectionHeadText} text-secondary basis-3/6`}>CONTACT</h2>
                <div className="basis-3/6">
                    <ContactForm />
                </div>
            </div>

        </section>
    )
}

export default Contact