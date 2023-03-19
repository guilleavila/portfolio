import { delay, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import useMouse from "@react-hook/mouse-position";


const Mouse = ({ variants, spring, color }) => {

    return (
        <motion.div
            variants={variants}
            animate="default"
            transition={spring}
            className={`${color === "primary" ? 'bg-primary' : 'bg-secondary'} rounded-xl fixed top-0 left-0 z-20`}
        />
    )
}

export default Mouse