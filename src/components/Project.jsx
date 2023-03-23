import { motion } from "framer-motion"
import { useState } from "react"
import { github } from "../assets"
import { styles } from "../styles"

const Project = ({ name, header, description, tags, image, source_code_link, live_demo_link }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleVariants = {
        open: {
            rotate: 135
        },
        closed: {
            rotate: 0
        }
    }

    console.log(image)

    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.3, type: "spring" } }}
            className="relative z-20"
        >
            <motion.div className="flex flex-row justify-between items-center" layout="position">
                <h3 className={`${styles.listTitle}`}>{name}</h3>
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
                        <p className={`${styles.listBody} font-light my-5`}>{description}</p>
                        {image && <img src={image} alt={name} className="w-full mt-6 z-0 relative" />}

                        <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                            {tags.map((tag) => (
                                <li key={tag}
                                    className="bg-opacity-30 bg-primary text-tertiary rounded-full px-4 py-1 md:text-[14px] text-[12px]"
                                >
                                    # {tag}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex gap-5">
                            <motion.button whileHover={{ opacity: 1, scale: 1.05 }} className={`${styles.linkButton}`}>
                                <a href={source_code_link} target="_blank" className="flex gap-2 items-center text-secondary">
                                    <img src={github} alt="github-logo" className="w-4 h-4" />GitHub
                                </a>
                            </motion.button>

                            {
                                live_demo_link &&
                                <motion.button whileHover={{ opacity: 1, scale: 1.05 }} className={`${styles.linkButton}`}>
                                    <a href={live_demo_link} target="_blank" className="flex gap-2 items-center text-secondary">
                                        Live Demo
                                    </a>
                                </motion.button>
                            }

                        </div>
                    </motion.div>
                )}
                <motion.hr className="my-5" />
            </motion.div>

        </motion.div >
    )
}

export default Project