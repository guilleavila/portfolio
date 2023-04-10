export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};

export const mobile = () => {
    return {
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
}

export const toggleVariants = () => {
    return {
        open: {
            rotate: 135
        },
        closed: {
            rotate: 0
        }
    }
}