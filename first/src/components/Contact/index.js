import { Component } from "react";

import "./index.css"

class Contact extends Component{
    onClickEmail = () => {
        window.open("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbFhNXXDHjsrrhtnJXhjHGzgNqstThrZkdRrFNbCKgFjNFpwlCGncsczLmFLQdkfFPmlCM")
    }

    onClickLinkedInButton = () =>{
        window.open("https://www.linkedin.com/in/ranjith-kumar-kariveda-2543151b9/")
      }
    render(){
        return(
            <div className="contact-bg-container">
                <h1 className="about-heading-container">Contact</h1>
                <hr className="rounded hr"/>
                <div className="contacts-align">
                    <div className="each-contact" onClick={this.onClickEmail}>
                        <img src="https://res.cloudinary.com/edu123/image/upload/v1735358459/icons8-email-64-removebg-preview_h3zjke.png" alt="email" className="contact-image"/>
                        <h1 className="contact-item-heading">Email</h1>
                        <p className="contact-item-paragraph">ranjithkumarkariveda@gmail.com</p>
                    </div>
                    <div className="each-contact" onClick={this.onClickLinkedInButton }>
                        <img src="https://res.cloudinary.com/edu123/image/upload/v1735467334/download-removebg-preview_zdmff9.png" alt="email" className="contact-image"/>
                        <h1 className="contact-item-heading">LinkedIn</h1>
                        <p className="contact-item-paragraph">Click me</p>
                    </div>
                    <div className="each-contact" >
                        <img src="https://res.cloudinary.com/edu123/image/upload/v1735469206/location_qaz3tm.png" alt="email" className="contact-image"/>
                        <h1 className="contact-item-heading">Address</h1>
                        <p className="contact-item-paragraph">Narayanapuram(village),Bonakal(Mandal)<br/> Khammam(District),Pin Code : 507204</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact