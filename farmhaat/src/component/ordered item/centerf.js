import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faStreetView} from "@fortawesome/free-solid-svg-icons"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import './styleoi.css';
function Centerf() {
    return (
        <div>
            <footer>
        <div className="main-content">
            <div className="left box">
                <h2>Contact us</h2>
                <div className="content">
                    <div className="phone">
                        <span><FontAwesomeIcon icon={faPhoneAlt}/></span>
                        <span className="pho">&nbsp; 0421 123456 &nbsp;+91 8190029732</span>
                    </div><br></br>
                    <div className="email">
                        <span><FontAwesomeIcon icon={faEnvelope}/></span>
                        <span className="mail">&nbsp;&nbsp;contact.farmhaat@gmail.com</span>
                    </div>
                    <div className="social">
                        <a href="#"> <span><FontAwesomeIcon icon={faFacebook}/></span></a>
                        <a href="#"> <span><FontAwesomeIcon icon={faInstagram}/></span></a>
                        <a href="#"> <span><FontAwesomeIcon icon={faWhatsapp}/></span></a>
                        <a href="#"><span><FontAwesomeIcon icon={faTwitter}/></span></a>
                        <a href="#"><span><FontAwesomeIcon icon={faYoutube}/></span></a>
                    </div>
                </div>
            </div>
            <div className="center box">
                <h2>Address</h2>
                <div className="content">
                    <div className="place">
                        <span><FontAwesomeIcon icon={faStreetView}/></span>
                        <span className="Text">&nbsp;&nbsp;2/827, Vellagoundan Thottam, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ganapathipalayam, <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tirupur -641605</span>
                    </div>
                    <a className = "ctas" href="https://www.google.co.in/maps/place/Vellagoundan+Thottam/@11.0379345,77.3374261,17z/data=!4m12!1m5!8m4!1e4!2s117202927009810744605!3m1!1e1!3m5!1s0x3ba9a9e86124b215:0xa552b05896b8138e!8m2!3d11.0377253!4d77.3373566!16s%2Fg%2F11pb17br0b?hl=en"><button>Locate us</button></a>
                </div>
            </div>
            <div className="right box">
                <h2>Quick links</h2>
                <div className="contents">
                    <ul>
                        <li><a href="./home.html">Home</a></li>
                        <li><a href="./feedback.html">Feedback</a></li>
                        <li><a href="./product.html">Product</a></li>
                        <li><a href="./investors.html">Investor</a></li>
                        <li><a href="./register.html">Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}

export default Centerf
