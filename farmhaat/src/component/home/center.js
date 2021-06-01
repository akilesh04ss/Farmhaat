import React from 'react'
import './style.css'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Center() {
    return (
        <div>
        <div>
            <div className="we" ><a  href="#" ><h1>FARMHAAT</h1></a></div> 
        </div>
        <footer>
        <div className="social">
            <a href="#" > <span ><FontAwesomeIcon className="fb" icon={faFacebook} color="black" /></span></a>
            <a href="#"> <span><FontAwesomeIcon className="insta" icon={faInstagram} color="black" /></span></a>
            <a href="https://www.youtube.com/watch?v=eiGdsH1g20k"> <span><FontAwesomeIcon className="wht" icon={faWhatsapp} color="black" /></span></a>
            <a href="https://www.youtube.com/watch?v=eiGdsH1g20k"><span><FontAwesomeIcon className="twt" icon={faTwitter} color="black" /></span></a>
            <a href="#"><span><FontAwesomeIcon className="utb" icon={faYoutube} color="black" /></span></a>
        </div>
    </footer>
    <div className="ce">
        <p>LET US GO WITH THE FLOW OF NATURE!</p>
    </div>
    <a href="./about.html" ><button className="button">Take a tour</button></a>
    <div className="end">
        <p>Copyrights <i class="fa fa-copyright" aria-hidden="true"></i>  2020 - 2021 Farmhaat Industry. Powered by Akilesh</p>
    </div>
    </div>
    )
}

export default Center
