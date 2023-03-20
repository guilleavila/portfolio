import { motion, useAnimationControls } from "framer-motion"

const TextSpan = ({ children, br }) => {

    const controls = useAnimationControls()

    const fillAnimation = () => {
        controls.start({
            color: ['#69af99', '#3d3d3d'],
            transition: { duration: 3.5, delay: 0.7 },

        })
    }

    return (
        <>
            {br && <br />}
            <motion.span
                animate={controls}
                onMouseOver={() => fillAnimation()}>
                {
                    children === " " && !br ? "\u00A0" : children
                }
            </motion.span>
        </>
    )
}

export default TextSpan