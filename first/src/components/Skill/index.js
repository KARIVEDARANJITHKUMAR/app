// import { Component } from "react"
// import "./index.css"
// import Skill from "../Skill"


// const skillsList = [
//     {
//         skillId:0,
//         imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png",
//         title : "HTML",
//     },
//     {
//         skillId:1,
//         imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png",
//         title : "CSS",
//     },
//     {
//         skillId:2,
//         imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png",
//         title : "Bootstrap",
//     },
//     {
//         skillId:3,
//         imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png",
//         title : "JavaScript",
//     },
//     {
//         skillId:4,
//         imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png",
//         title : "ReactJs",
//     },
//     {
//         skillId:5,
//         imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png",
//         title : "NodeJs",
//     },
//     {
//         skillId:6,
//         imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png",
//         title : "Python",
//     },
//     {
//         skillId:7,
//         imageUrl:"https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png",
//         title : "SQLite",
//     }
// ]

// class NotFound extends Component{
//     render(){

//         return(
//         <div>
//             <div className="skills-bg-container">
//                 <h1 className="skills-heading-container">Skills</h1>
//                 <hr className="rounded hr"/>
//                 <div>
//                         <ul className="skills-align">
//                         {skillsList.map(eachItem => (
//                             <Skill
//                             key={skillsList.skillId}
//                             skillDetails={eachItem}
//                             />
//                         ))}
//                         </ul>
//                 </div>   
                    
//                 </div>
//             </div>
            
//         )
//     }
// }



// const Skill = () =>(
//     <div className="skills-bg-container">
//          <h1 className="skills-heading-container">Skills</h1>
//          <hr className="rounded hr"/>
//         <div className="skills-align">
//             <div className="each-skill">
//                 <img src="https://res.cloudinary.com/edu123/image/upload/v1735033557/portfolio-skills-html-img_ritn7f.png" alt="html-image"className="skills-image"/>
//                 <p className="skill-title">HTML</p>
//             </div>
//             <div className="each-skill">
//                 <img src="https://res.cloudinary.com/edu123/image/upload/v1735037183/portfolio-skills-css-img_wl5qth.png" alt="html-image" className="skills-image"/>
//                 <p className="skill-title">CSS</p>
//             </div>
//             <div className="each-skill">
//                 <img src="https://res.cloudinary.com/edu123/image/upload/v1735037183/portfolio-skills-bootstrap-img_sai3wy.png" alt="html-image" className="skills-image"/>
//                 <p className="skill-title">Bootstrap</p>
//             </div>
//             <div className="each-skill">
//                 <img src="https://res.cloudinary.com/edu123/image/upload/v1735037183/portfolio-skills-js-img_icdgt0.png" alt="html-image"className="skills-image"/>
//                 <p className="skill-title">JavaScript</p>
//             </div>
//             <div className="each-skill">
//                 <img src="https://res.cloudinary.com/edu123/image/upload/v1735037184/React_lvzhob_zrtc5s.png" alt="html-image" className="skills-image"/>
//                 <p className="skill-title">React Js</p>
//             </div>
//             <div className="each-skill">
//                 <img src="https://res.cloudinary.com/edu123/image/upload/v1735037183/node_qbnizq_t4qakh.png" alt="html-image" className="skills-image"/>
//                 <p className="skill-title">NodeJs</p>
//             </div>
//             <div className="each-skill">
//                 <img src="https://res.cloudinary.com/edu123/image/upload/v1735037201/python_prznox_kvijmz.png" alt="html-image" className="skills-image"/>
//                 <p className="skill-title">Python</p>
//             </div>
//             <div className="each-skill">
//                 <img src="https://res.cloudinary.com/edu123/image/upload/v1735037183/Sqlite-square-icon.svg_e1vqhv_qc5erc.png" alt="html-image" className="skills-image"/>
//                 <p className="skill-title">SQLite</p>
//             </div>
//         </div>
//     </div>
// )
// export default Skill
