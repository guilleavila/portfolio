import { styles } from "../styles"
import TechCard from "./TechCard"


const Tech = () => {
    return (
        <section className={`${styles.paddingX} mb-60`}>
            <h3 className={`${styles.sectionHeadText}`}>SKILLS</h3>

            <div className="flex flex-wrap justify-between items-start gap-10">
                <TechCard type="frontend" />
                <TechCard type="backend" />
                <TechCard type="design" />
            </div>
        </section>
    )
}

export default Tech