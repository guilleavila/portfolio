import { delay, motion } from "framer-motion"
import { createContext, useEffect, useRef, useState } from "react"
import useMouse from "@react-hook/mouse-position";
import { isMobile } from "react-device-detect";

const MouseContext = createContext()

const MouseProviderWrapper = ({ children }) => {

    const [color, setColor] = useState("secondary")
    const mouseRef = useRef(null)

    const mouse = useMouse(mouseRef, {
        enterDelay: 100,
        leaveDelay: 100
    })

    let mouseXPosition = -10;
    let mouseYPosition = -10;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 1,
            height: 24,
            width: 24,
            x: mouseXPosition - 12,
            y: mouseYPosition - 12
        },
        mobile: {
            opacity: 0
        }
    }

    const spring = {
        type: "spring",
        stiffness: 3000,
        damping: 100,
        mass: 0.1
    };

    const changeColorGreen = () => setColor("primary")
    const changeColorBlack = () => setColor("secondary")

    return (

        <MouseContext.Provider value={{ changeColorBlack, changeColorGreen }}>
            <div ref={mouseRef}>
                <motion.div
                    variants={variants}
                    animate={isMobile ? "mobile" : "default"}
                    transition={spring}
                    className={`${color === "primary" ? 'bg-green' : 'bg-secondary'} rounded-xl fixed top-0 left-0 z-20`}
                />
                {children}
            </div>
        </MouseContext.Provider>


    )
}

export { MouseContext, MouseProviderWrapper }