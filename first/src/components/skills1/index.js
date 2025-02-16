import { Component } from "react"
import "./index.css"
import Skillscard from "../Skillscard"

const skillsList = [
    {
        skillId:0,
        imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png",
        title : "HTML",
    },
    {
        skillId:1,
        imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735037183/portfolio-skills-css-img_wl5qth.png",
        title : "CSS",
    },
    {
        skillId:2,
        imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735037183/portfolio-skills-bootstrap-img_sai3wy.png",
        title : "Bootstrap",
    },
    {
        skillId:3,
        imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735037183/portfolio-skills-js-img_icdgt0.png",
        title : "JavaScript",
    },
    {
        skillId:4,
        imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735037184/React_lvzhob_zrtc5s.png",
        title : "ReactJs",
    },
    {
        skillId:5,
        imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735037183/node_qbnizq_t4qakh.png",
        title : "NodeJs",
    },
    {
        skillId:6,
        imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735037201/python_prznox_kvijmz.png",
        title : "Python",
    },
    {
        skillId:7,
        imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735037183/Sqlite-square-icon.svg_e1vqhv_qc5erc.png",
        title : "SQLite",
    }
]

class skills1 extends Component{
    render(){

        return(
        <div>
            <div className="skills-bg-container">
                <h1 className="skills-heading-container">Skills</h1>
                <hr className="rounded hr"/>
                <div>
                        <ul className="skills-align">
                        {skillsList.map(eachItem => (
                            <Skillscard
                            key={skillsList.skillId}
                            skillDetails={eachItem}
                            />
                        ))}
                        </ul>
                </div>   
                    
                </div>
            </div>
            
        )
    }
}

export default skills1