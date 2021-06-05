import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../assets/logonew.png'
import bk from '../../assets/bk.gif'
import cancel from '../../assets/more4.png'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Chh(){
    return (
<div>
<div>
        <img className="back" src= {bk} alt="bk"/> 
    </div>
<div className="head">
        <header >
            <div className="lj">
                <img  className ="logo" src={logo} alt="logo" width="80px"/>   
            </div>

           
            <nav>
                <ul className="lin">
                    <li><a className="o"><Link to="/product">Products</Link></a></li>
                    <li><a className="co"><Link to="/investor">Investors</Link></a></li>
                    <li><a className="oc" href="./about.html">About</a></li>
                </ul>
                <a className = "cta" href="./feedback.html"><button>Get in Touch</button></a>
            </nav>
        </header>
    </div>
    <input type="checkbox" id="check"/>
    <label for="check">
        <i id="btn"><FontAwesomeIcon  icon={faBars} color="white" /></i>
        <i><img src ={cancel} id="cancel" width="40x"/></i>
    </label>
    <div className="sidebar">
        <header>Menu</header>
        <ul>
            <li><a href="./home.html"><i><FontAwesomeIcon icon={faHome}  /></i>Home</a></li>
            <li><a href="./login.html"><i><FontAwesomeIcon icon={faUserCircle}/></i>User</a></li>
            <li><a href="./cart.html"><i><FontAwesomeIcon icon={faCartPlus}/></i>Cart</a></li>
            <li><a href="./oredered item.html"><i><FontAwesomeIcon icon={faTruckLoading}/></i>Ordered item</a></li>
            <li><a href="#"><i><FontAwesomeIcon icon={faSignOutAlt}/></i>Log out</a></li>
        </ul>
    </div>
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
        <p>Copyrights <i><FontAwesomeIcon icon={faCopyright} /></i>  2020 - 2021 Farmhaat Industry. Powered by Akilesh</p>
    </div>
</div>
);
}

export default Chh;
