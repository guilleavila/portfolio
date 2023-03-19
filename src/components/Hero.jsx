import { motion } from "framer-motion"
import { heroText } from "../constants"
import { styles } from "../styles"
import TextSpan from "./TextSpan"

const Hero = () => {

    return (
        <div className={`${styles.paddingX} flex items-center py-6 relative w-full h-screen`}>
            <div className={`w-full flex flex-col justify-between items-start max-w-7xl mx-auto`}>

                {/* <motion.div
                    className="bg-primary w-[200vw] h-[200vh] absolute top-[-50vh] left-[-100vw] z-[-20] rounded-full"
                    animate={{ x: -1000, transition: { duration: 2 } }}
                /> */}

                <h1 className={`${styles.heroHeadText}`}>

                    {
                        heroText.split('').map((letter, letterIndex) => {
                            return (
                                letterIndex === 4
                                    ? <TextSpan key={letterIndex} br={true}>{letter}</TextSpan>
                                    : <TextSpan key={letterIndex} br={false}>{letter}</TextSpan>
                            )
                        })
                    }

                </h1>

                <p className={`${styles.heroSubText} fixed bottom-20`}>Frontend Developer & UX Designer</p>
            </div>
        </div >
    )
}

export default Hero