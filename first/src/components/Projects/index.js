import { Component } from "react"
import "./index.css"

class Projects extends Component  {

    onClickVeiw1 = () =>{
        window.open("https://tourismranjith.ccbp.tech/")
    }
    onClickVeiw2 = () =>{
        window.open("https://foodmunchran.ccbp.tech/")
    }
    onClickVeiw3 = () =>{
        window.open("https://todoranjith.ccbp.tech/")
    }



    render(){
            return(
                <div className="projects-bg-container"> 
                <h1 className="skills-heading-container">Projects</h1>
                <hr className="rounded hr"/>
                <div className="projects-align ">
                <div className="each-project ">
                    <img src="https://res.cloudinary.com/edu123/image/upload/v1735299485/wdd_pe0kno.png" alt="html-image"className="projects-image"/>
                    <div>
                        <p className="skill-title">Static Website Projects</p>
                        <button className="project-button" onClick={this.onClickVeiw1}>View Project</button>
    
                    </div>
                    
                </div>
                <div className="each-project ">
                    <img src="https://res.cloudinary.com/edu123/image/upload/v1735305522/Img17_z4vdfm.png" alt="html-image"className="projects-image"/>
                    <div>
                        <p className="skill-title">Responsive Website Projects</p>
                        <button className="project-button" onClick={this.onClickVeiw2}>View Project</button>
    
                    </div>
                </div>
                <div className="each-project ">
                    <img src="https://res.cloudinary.com/edu123/image/upload/v1735306583/1604345924078-removebg-preview_s43s18.png" alt="html-image"className="projects-image"/>
                    <div>
                        <p className="skill-title">Dynamic Website Projects</p>
                        <button className="project-button" onClick={this.onClickVeiw3}>View Project</button>
    
                    </div>
                </div>
                <div className="each-project ">
                    <img src="https://res.cloudinary.com/edu123/image/upload/v1735306875/static_gw5wor.png" alt="html-image"className="projects-image"/>
                    <div>
                        <p className="skill-title">React JS Projects</p>
                        <button className="project-button" onClick={this.onClickVeiw2}>View Project</button>
    
                    </div>
                </div>
                {/* <div className="each-project ">
                    <img src="https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png" alt="html-image"className="skills-image"/>
                    <p className="skill-title">HTML</p>
                </div> */}
                </div>
            </div>   
        )

    }
    
}

export default Projects