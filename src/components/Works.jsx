import { projects } from "../constants"
import { styles } from "../styles"
import Project from "./Project"

const Works = () => {
    return (
        <section className={`${styles.paddingX} flex flex-wrap justify-start items-center md:h-screen`}>
            <h2 className={`${styles.sectionHeadText} md:basis-3/6`}>WORKS</h2>
            <ul className="md:basis-3/6 mt-10 md:mt-0">
                {projects.map((project) => (
                    <Project key={project.name} {...project} />
                ))}
            </ul>
        </section>
    )
}

export default Works