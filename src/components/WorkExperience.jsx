import { AnimatePresence, motion } from "framer-motion"
import { styles } from "../styles"
import Button from "./Button"


const WorkExperience = ({ title, company_name, date, points, openedId, setOpenedId }) => {

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
            transition={{
                layout: { duration: 0.3 },
            }}
            className="relative z-20 w-[90vw] md:w-auto"
        >

            <motion.div layout='position' className="flex flex-row flex-grow justify-between items-center">
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio consequuntur debitis amet ex ducimus. Ipsa laboriosam obcaecati accusamus itaque tenetur?</p> */}

                <motion.h3 layout='position' className={`${styles.listTitle}`}>{title}</motion.h3>
                <motion.button
                    layout='position'
                    onClick={() => {
                        openedId === company_name ? setOpenedId(null) : setOpenedId(company_name)
                    }}
                    className={`${styles.listTitle} text-tertiary cursor-none`}
                    animate={openedId === company_name ? "open" : "closed"}
                    variants={toggleVariants}
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
                            <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
                                {points.map((point) => (
                                    <li key={point}
                                        className="bg-opacity-30 bg-primary text-tertiary rounded-full px-4 py-1 md:text-[14px] text-[12px]"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.hr layout="position" className="my-5" />
            </motion.div>

        </motion.div >
    )
}

export default WorkExperience