import { motion, useAnimationControls } from "framer-motion"

const TextSpan = ({ children }) => {

    const controls = useAnimationControls()

    const fillAnimation = () => {
        controls.start({
            transform: [
                'color(red)',
                'color(black'
            ],
            transition: { duration: 1 },

        })
    }

    return (
        <motion.span
            animate={controls}
            onMouseOver={() => fillAnimation()}>
            {children}
        </motion.span>
    )
}

export default TextSpan