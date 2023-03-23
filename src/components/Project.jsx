import { motion } from "framer-motion"
import { useState } from "react"
import { github } from "../assets"
import { styles } from "../styles"
import Button from "./Button"

const Project = ({ name, header, description, tags, image, source_code_link, live_demo_link, openedId, setOpenedId }) => {

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
            transition={{
                layout: { duration: 0.3 },
            }}
            className="relative z-20"
        >
            <motion.div layout="position" className="flex flex-row justify-between items-center">
                <motion.h3 className={`${styles.listTitle}`}>{name}</motion.h3>
                <motion.button
                    onClick={() => {
                        openedId === name ? setOpenedId(null) : setOpenedId(name)
                    }}
                    className={`${styles.listTitle} text-tertiary cursor-none`}
                    animate={openedId === name ? "open" : "closed"}
                    variants={toggleVariants}
                    whileHover={{ color: "#3d3d3d", scale: 1.2 }}
                >
                    +
                </motion.button>
            </motion.div>

            <motion.div>
                <motion.p className={`${styles.listBody} font-light my-5`}>{header}</motion.p>
                {openedId === name && (
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
                            <Button href={source_code_link} src={github} alt="github-logo">Github</Button>
                            {live_demo_link && <Button href={live_demo_link}>Live Demo</Button>}
                        </div>
                    </motion.div>
                )}
                <motion.hr className="my-5" />
            </motion.div>

        </motion.div >
    )
}

export default Project