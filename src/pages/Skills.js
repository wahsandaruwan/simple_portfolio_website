// Hooks
import { useState } from "react"
// Data
import { skillsHave } from "../data/skills"

// Skills Page Component
const Skills = () => {
    // Skills Display State
    const [skills] = useState(skillsHave)

    return (
        <>
            <section className="skill-page">
                <h1>My Skills</h1>
                <div className="row front">
                    {
                        skills.map((skill) => {
                            console.log(skill);
                            const { id, name, type, image } = skill
                            if (type === "Frontend") {
                                return (
                                    <div className="ski" key={id}>
                                        <img src={image} alt={name} />
                                        <p>{name}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <div className="row back">
                    {
                        skills.map((skill) => {
                            console.log(skill);
                            const { id, name, type, image } = skill
                            if (type === "Backend") {
                                return (
                                    <div className="ski" key={id}>
                                        <img src={image} alt={name} />
                                        <p>{name}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <div className="row data">
                    {
                        skills.map((skill) => {
                            console.log(skill);
                            const { id, name, type, image } = skill
                            if (type === "Database") {
                                return (
                                    <div className="ski" key={id}>
                                        <img src={image} alt={name} />
                                        <p>{name}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <div className="row dev">
                    {
                        skills.map((skill) => {
                            console.log(skill);
                            const { id, name, type, image } = skill
                            if (type === "Devops") {
                                return (
                                    <div className="ski" key={id}>
                                        <img src={image} alt={name} />
                                        <p>{name}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Skills
