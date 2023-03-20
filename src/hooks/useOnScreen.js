import { useEffect, useState } from "react"

const useOnScreen = (ref, threshold = 0.3) => {

    // store whether the element is visible
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // update state when observer callback fires
                setIntersecting(entry?.isIntersecting ?? false)
            },
            {
                rootMargin: "0px",
                threshold
            }
        )

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [ref, threshold])

    return isIntersecting
}

export default useOnScreen