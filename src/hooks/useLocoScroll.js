import gsap from "gsap"
import LocomotiveScroll from "locomotive-scroll"
import { useEffect } from "react"
// import 'locomotive-scroll/src/locomotive-scroll.css'
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const useLocoScroll = (start) => {
    useEffect(() => {
        if (!start) return

        const scrollEl = document.querySelector('#main-container')

        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        })

        // locoScroll.on('scroll', () => {
        //     ScrollTrigger.update()
        // })

        // ScrollTrigger.scrollerProxy(scrollEl, {
        //     scrollTop(value) {
        //         if (locoScroll) {
        //             return arguments.length
        //                 ? locoScroll.scrollTo(value, 0, 0)
        //                 : locoScroll.scroll.instance.scroll.x
        //         }
        //         return null
        //     },
        //     scrollLeft(value) {
        //         if (locoScroll) {
        //             return arguments.length
        //                 ? locoScroll.scrollTo(value, 0, 0)
        //                 : locoScroll.scroll.instance.scroll.x
        //         }
        //         return null
        //     }
        // })

        // const lsUpdate = () => {
        //     if (locoScroll) {
        //         locoScroll.update()
        //     }
        // }

        // ScrollTrigger.addEventListener('refresh', lsUpdate)
        // ScrollTrigger.refresh()

        // return () => {
        //     if (locoScroll) {
        //         ScrollTrigger.removeEventListener("refresh", lsUpdate)
        //         locoScroll.destroy()
        //         locoScroll = null
        //     }
        // }

    }, [start])
}

export default useLocoScroll