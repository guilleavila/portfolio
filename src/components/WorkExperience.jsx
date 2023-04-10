import PropTypes from "prop-types"
import { AnimatePresence, motion } from "framer-motion"
import { styles } from "../styles"
import { toggleVariants } from "../utils/motion"
import Button from "./Button"


const WorkExperience = ({ title, company_name, date, points, openedId, setOpenedId }) => {

    return (
        <motion.div
            transition={{
                layout: { duration: 0.3 },
            }}
            className="relative z-20 w-[90vw] md:w-auto"
        >

            <motion.div layout='position' className="flex flex-row flex-grow justify-between items-center">

                <motion.h3 layout='position' className={`${styles.listTitle}`}>{title}</motion.h3>
                <motion.button
                    layout='position'
                    onClick={() => {
                        openedId === company_name ? setOpenedId(null) : setOpenedId(company_name)
                    }}
                    className={`${styles.listTitle} text-tertiary cursor-none`}
                    animate={openedId === company_name ? "open" : "closed"}
                    variants={toggleVariants()}
                    whileHover={{ color: "#3d3d3d", scale: 1.2 }}
                >
                    +
                </motion.button>
            </motion.div>

            <motion.div className="flex justify-between items-center">
                <motion.p layout='position' className={`${styles.listBody} font-light my-5`}>{company_name.toUpperCase()}</motion.p>
                <motion.p layout='position' className={`${styles.listBody} font-light my-5 opacity-70`}>{date}</motion.p>
            </motion.div>

            <motion.div layout="position">
                <AnimatePresence>
                    {openedId === company_name && (
                        <motion.div
                            key="content" exit={{ y: "-10%", opacity: 0, transition: { duration: 0.2 } }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ul>
                                {points.map((point) => (
                                    <li key={point}
                                        className="text-tertiary py-2 md:text-[14px] text-[12px] points"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.hr layout="position" className="my-5" />
            </motion.div >

        </motion.div >
    )
}

WorkExperience.propTypes = {
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    openedId: PropTypes.string,
    setOpenedId: PropTypes.func.isRequired
}

export default WorkExperience