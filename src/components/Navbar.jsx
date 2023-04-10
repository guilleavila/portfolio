import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { styles } from "../styles"
import { navLinks } from "../constants"
import { rubberduck, close, menu } from '../assets'
import { AnimatePresence, motion } from "framer-motion"
import { MouseContext } from "../context/mouse.context"
import gsap from "gsap"

const mobile = {
    opened: {
        opacity: 1,
        height: '100vh',
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        }
    },
    closed: {
        opacity: 0,
        height: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.3,
            delay: 0.5
        }
    }
}

const Navbar = () => {

    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    const { color } = useContext(MouseContext)

    useEffect(() => {
        if (toggle) {
            gsap.fromTo(".mobile-nav-link", { opacity: 0, y: 30 }, { y: 0, opacity: 1, stagger: 0.2, duration: 0.4 })
        } else {
            gsap.to(".mobile-nav-link", { y: -20, opacity: 0, stagger: 0.1, duration: 0.2 })
        }
    }, [toggle])

    return (
        <nav className={`${styles.paddingX} w-full flex flex-row items-center justify-start py-6 fixed z-30 top-0  ${color === "primary" ? "bg-navPattern bg-cover bg-fixed bg-center" : ""}`}>
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
                    {/* ICONO */}
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[25px] h-[25px] object-contain cursor-pointer z-20"
                        onClick={() => setToggle(!toggle)}
                    />

                    {/* MENÚ */}
                    <AnimatePresence>
                        {toggle && (
                            <motion.div
                                // className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10`}
                                className="absolute w-full bg-secondary right-0 top-0 z-10"
                                variants={mobile}
                                initial={{ height: 0, opacity: 0 }}
                                animate="opened"
                                exit="closed"
                            >
                                <div className="flex flex-col h-screen justify-center items-center">
                                    <ul className="list-none flex justify-end items-center flex-col gap-10">
                                        {navLinks.map((link) => (
                                            <li key={link.id}
                                                className={`${active === link.title ? "font-bold" : ""} opacity-0 mobile-nav-link`}
                                                onClick={() => {
                                                    setToggle(!toggle)
                                                    setActive(link.title)
                                                }}
                                            >
                                                <a href={`#${link.id}`} className={`${styles.mobileNavText}`}>{link.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </nav >
    )
}

export default Navbar