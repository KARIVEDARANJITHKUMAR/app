import "./index.css"

const Skillscard = props =>{

    const {skillDetails} = props
    const {imageUrl,title} = skillDetails

    return(
        <div className="each-skill">
            <img src={imageUrl} alt={title}  className="skills-image"/>
            <h1 className="skill-title">{title}</h1>
        </div>
    )
}

export default Skillscard

