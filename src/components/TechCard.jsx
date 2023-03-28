import { technologies } from "../constants"
import { styles } from "../styles"

const TechCard = ({ type }) => {
    return (
        <div className="flex flex-col items-center border border-green rounded-lg p-10 mt-14 self-stretch grow bg-white bg-opacity-30">

            <h3 className={`${styles.listTitle} mt-3 mb-10`}>{type.toUpperCase()}</h3>

            <div className="flex flex-col flex-wrap justify-between items-start gap-3">
                {technologies[type].map((tech) => (
                    <p key={tech.name} className={`${styles.listBody} flex gap-2 justify-start items-center`}>
                        <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-cover opacity-70" />
                        {tech.name}
                    </p>
                ))}
            </div>

        </div>
    )
}

export default TechCard