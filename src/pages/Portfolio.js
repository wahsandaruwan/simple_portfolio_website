import {useState} from "react"
import {projects} from "../data/projects"

const Portfolio = () => {
    // Projects Display State
    const [boxes, setBoxes] = useState(projects)
    return (
        <>
            <section className="portfolio-page">
                <h1>My Portfolio</h1>
                <div className="boxes">
                    {
                        boxes.map((box) => {
                            const {id, title, desc, github, demo, image} = box
                            console.log(image)
                            return (
                                <div className="bx" key={id}>
                                    <img src={image} alt={title} />
                                    <h4>{title}</h4>
                                    <p>{desc}</p>
                                    <div className="pro-btns">
                                        <a href={github} target="_blank">GitHub</a>
                                        <a href={demo} target="_blank">Demo</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Portfolio
