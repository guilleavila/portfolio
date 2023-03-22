import { motion } from "framer-motion"
import { useState } from "react"
import { styles } from "../styles"

const Project = ({ name, header, description, tags, images, source_code_link, live_demo_link }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleVariants = {
        open: {
            rotate: 135
        },
        closed: {
            rotate: 0
        }
    }

    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.3, type: "spring" } }}
            className="relative z-20"
        >
            <motion.div className="flex flex-row justify-between items-center" layout="position">
                <motion.h3 className={`${styles.listTitle}`}>{name}</motion.h3>
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${styles.listTitle} text-tertiary cursor-none`}
                    animate={isOpen ? "open" : "closed"}
                    variants={toggleVariants}
                    whileHover={{ color: "#3d3d3d", scale: 1.2 }}
                >
                    +
                </motion.button>
            </motion.div>

            <motion.div layout="position">
                <motion.p className={`${styles.listBody} font-light my-5`}>{header}</motion.p>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <p>{description}</p>
                        <p>{source_code_link}</p>
                    </motion.div>
                )}
                <motion.hr className="my-5" />
            </motion.div>

        </motion.div >
    )
}

export default Project