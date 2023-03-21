import { useState } from "react"
import { Link } from "react-router-dom"

import { styles } from "../styles"
import { navLinks } from "../constants"
import { rubberduck, close, menu } from '../assets'
import { motion, useAnimationControls } from "framer-motion"

const Navbar = () => {

    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    return (

        <nav className={`${styles.paddingX} w-full flex flex-row items-center justify-start py-6 fixed z-20 top-0`}>
            <div className="w-full flex justify-between items-center">

                {/* LOGO + NAME */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('')
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={rubberduck} alt="logo" className="w-10 h-10 object-contain" />
                    <p className="text-secondary text-[18px]">GUILLE ÁVILA</p>
                </Link>

                {/* DESKTOP NAVLINKS */}
                <ul className="list-none hidden md:flex flex-row gap-16">
                    {navLinks.map((link) => (
                        <motion.li key={link.id}
                            className={`${active === link.title ? "font-bold" : ""} text-secondary`}
                            onClick={() => setActive(link.title)}
                            whileHover={{
                                scale: 1.1,
                                color: '#69af99'
                            }}
                        >
                            <a href={`#${link.id}`}>{link.title.toUpperCase()}</a>
                        </motion.li>
                    ))}
                </ul>

                {/* MOBILE NAVLINKS */}
                <div className="md:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[25px] h-[25px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.id}
                                    className={`${active === link.title ? "font-bold" : ""}`}
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(link.title)
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title.toUpperCase()}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar