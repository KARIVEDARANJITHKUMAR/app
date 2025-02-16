import {Component} from "react"
import "./index.css"


class Home extends Component{
  onClickLinkedInButton = () =>{
    window.open("https://www.linkedin.com/in/ranjith-kumar-kariveda-2543151b9/")
  }

  render(){
    return(
      <div className="bg bg-container">
        <div className="descpription-container">
          <h1 className="heading">Hello all</h1>
          <h1 className="heading1">I am <span className="name-h1">KARIVEDA RANJITH KUMAR</span></h1>
          <h1 className="heading2">Full Stack Development enthusiast</h1>

          <button className="button" onClick={this.onClickLinkedInButton}>LinkedIn</button>
          {/* <button className="button" >
            <a href="https://res.cloudinary.com/edu123/image/upload/v1736053042/Ranjith_Kumar__2024-11-09-094052_1_opezwt.pdf" download="Resume.pdf">Download</a>
          </button> */}
        </div>
        <div>
          <img src="https://res.cloudinary.com/edu123/image/upload/v1734950798/home_bep9w2.png" alt="home-img" className="home-image"/>
        </div>
      </div>
    )
  }
}

export default Home
