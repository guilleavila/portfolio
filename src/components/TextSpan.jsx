import PropTypes from "prop-types"
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
                {children}
            </motion.span>
        </>
    )
}

TextSpan.propTypes = {
    children: PropTypes.string.isRequired,
    br: PropTypes.bool.isRequired
}

export default TextSpan