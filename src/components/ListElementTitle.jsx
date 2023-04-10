import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { toggleVariants } from "../utils/motion"

const ListElementTitle = ({ name, openedId, setOpenedId }) => {

  return (
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
  )
}

ListElementTitle.propTypes = {
  name: PropTypes.string.isRequired,
  openedId: PropTypes.string,
  setOpenedId: PropTypes.func.isRequired,
}

export default ListElementTitle