import Button from "./Button"
import { motion } from "framer-motion"
import { github, linkedin } from "../assets"
import { styles } from "../styles"

const Footer = () => {
    return (
        <div className={`${styles.paddingX} md:fixed bottom-10 z-20 flex flex-col md:flex-row gap-5 mt-20 mb-20 md:mb-0 justify-between items-center w-full opacity-0 footer`}>
            <motion.button whileHover={{ opacity: 1, scale: 1.05 }} className={`${styles.linkButton} relative z-20`}>
                <a href="/CV.pdf" download>
                    <p>Download CV</p>
                </a>
            </motion.button>
            <Button href="https://www.github.com/guilleavila" src={github} alt="github-logo">Github</Button>
            <Button href="https://www.linkedin.com/in/guillermo-%C3%A1vila/" src={linkedin} alt="linkedin-logo">LinkedIn</Button>
        </div>
    )
}

export default Footer