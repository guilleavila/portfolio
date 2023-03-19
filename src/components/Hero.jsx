import { heroText } from "../constants"
import { styles } from "../styles"
import TextSpan from "./TextSpan"


const Hero = () => {

    return (
        <section className="bg-primary relative w-full h-screen">
            <div className={`${styles.paddingX} 7xl:ml-16 absolute inset-0 top-50 w-full mx-auto flex flex-col justify-center items-start gap-5`}>

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

                    {/* {
                        heroText[0].split('').map((letter, letterIndex) => {
                            return (
                                <TextSpan key={letterIndex}>
                                    {letter}
                                </TextSpan>
                            )
                        })
                    }
                    <br />
                    {
                        heroText[1].split('').map((letter, letterIndex) => {
                            return (
                                <TextSpan key={letterIndex}>
                                    {letter}
                                </TextSpan>
                            )
                        })
                    } */}

                </h1>

                < p className={`${styles.heroSubText}`}>Frontend Developer & UX Designer</p>
            </div>
        </section >
    )
}

export default Hero