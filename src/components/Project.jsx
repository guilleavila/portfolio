import Button from "./Button"
import PropTypes from "prop-types"
import { AnimatePresence, motion } from "framer-motion"
import { github } from "../assets"
import { styles } from "../styles"
import { toggleVariants } from "../utils/motion"

const Project = ({ name, header, description, tags, image, source_code_link, live_demo_link, openedId, setOpenedId }) => {

    return (
        <motion.div
            transition={{
                layout: { duration: 0.3 },
            }}
            className="relative z-20"
        >

            <motion.div layout='position' className="flex flex-row justify-between items-center">
                <motion.h3 layout='position' className={`${styles.listTitle}`}>{name}</motion.h3>
                <motion.button
                    layout='position'
                    onClick={() => {
                        openedId === name ? setOpenedId(null) : setOpenedId(name)
                    }}
                    className={`${styles.listTitle} text-tertiary cursor-none w-12`}
                    animate={openedId === name ? "open" : "closed"}
                    variants={toggleVariants()}
                    whileHover={{ color: "#3d3d3d", scale: 1.2 }}
                >
                    +
                </motion.button>
            </motion.div>

            <motion.p layout='position' className={`${styles.listBody} font-light my-5`}>{header}</motion.p>

            <motion.div layout>
                <AnimatePresence>
                    {openedId === name && (
                        <motion.div
                            key="content" exit={{ y: "-10%", opacity: 0, transition: { duration: 0.2 } }}
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
                </AnimatePresence>
                <motion.hr layout="position" className="my-5" />
            </motion.div>

        </motion.div >
    )
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    source_code_link: PropTypes.string.isRequired,
    live_demo_link: PropTypes.string.isRequired,
    openedId: PropTypes.string,
    setOpenedId: PropTypes.func.isRequired,
}

export default Project