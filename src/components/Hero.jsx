import { heroText } from "../constants"
import { styles } from "../styles"
import TextSpan from "./TextSpan"


const Hero = () => {

    return (
        <section className="bg-primary relative w-full h-screen">
            <div className={`${styles.paddingX} 7xl:ml-16 absolute inset-0 top-50 w-full mx-auto flex flex-col justify-center items-start gap-5`}>

                <h1 className={`${styles.heroHeadText}`}>
                    {heroText.map((word, wordIndex) => (
                        word.split('').map((letter, letterIndex) => {
                            return (
                                wordIndex === 1 && letterIndex === 0
                                    ? <TextSpan key={letterIndex}><br />{letter}</TextSpan>
                                    : <TextSpan key={letterIndex}>{letter}</TextSpan>
                            )
                        }
                        )
                    ))}
                </h1>

                < p className={`${styles.heroSubText}`}>Frontend Developer & UX Designer</p>
            </div>
        </section >
    )
}

export default Hero