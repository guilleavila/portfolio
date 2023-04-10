import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { styles } from "../styles"

const Button = ({ href, src, alt, children }) => {
    return (
        <motion.button whileHover={{ opacity: 1, scale: 1.05 }} className={`${styles.linkButton} relative z-20`}>
            <a href={href} target="_blank" className="flex gap-2 items-center text-secondary">
                {src && <img src={src} alt={alt} className="w-4 h-4" />}
                {children}
            </a>
        </motion.button>
    )
}

Button.propTypes = {
    href: PropTypes.string.isRequired,
    src: PropTypes.string,
    alt: PropTypes.string,
    children: PropTypes.string.isRequired
}

export default Button