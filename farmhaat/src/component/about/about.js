import React from 'react'
import './stylea.css'
import logo from '../../assets/logonew.png'
import mis from '../../assets/grow1.png'
import vis from '../../assets/prepare1.png'
import plant from '../../assets/plant.gif'
import seed from '../../assets/seed.svg'
import cog from '../../assets/cog.svg'
import check from '../../assets/check.svg'
import thumb from '../../assets/thumb.svg'
import coin from '../../assets/coins.svg'
import recycle from '../../assets/recycle.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faStreetView} from "@fortawesome/free-solid-svg-icons"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"

function About() {
    return (
        <div>
                         <div className="head">
        <header >
            <div className="lj">
                <img  className ="logo" src={logo} alt="logo" width="80px"/>   
            </div>
            <nav>
                <ul className="lin">
                     <li><a class="oce" href="./home.html">Home</a></li>
                     <li><a class="o" href="./product.html">Products</a></li>
                     <li><a class="co" href="./investors.html">Investors</a></li>
                     <li><a class="oc" href="./about.html">About</a></li>
                </ul>
                <a className = "cta" href="./feedback.html"><button>Get in Touch</button></a>
            </nav>
        </header>
        </div>
        <div className="our">
         <p>Profile</p>
          <div><img src={mis} alt="Mision" className="mis"/>
         <p className="misi">MISSION</p>
                <p className="enter">To provide 100% pure and organic products and to make the consumer satisfied. To be a globally competitive producer.</p></div>
            <div><img src={vis}alt="Vision" className="vis"/>
         <p className="visi">VISION</p>
         <p className="venter">To expand the company and setup branches allover the parts of world. To handle al knds of waste in an effective way with 0% wastage.</p>
          </div>    
            <div className="profile">
        <p>Our organization was set up to provide objective information about the use of wastes for the benefit of the environment. 
        We are the notable Organic manure Supplier and Manufacturers. We are engaged in manufacturing, supplying, wholesaling and exporting quality assured range of Organic manure. 
        The fertilizers are ideal for soil improvement, optimizing crop yields and making plants healthier in an eco-friendly manner while reducing the use of any chemical fertilizer.
        Our company's main principle is proper waste disposal.We collect the wastes directly from the  farms. We use that wastes to produce manures,Coir bricks,compost,etc...
        </p><br></br>
    <p>Our products are accessible with an assurance of the best quality and standards as per fertilizer control and are widely used for all crops for agriculture, horticulture, plantation crops, nurseries, fruits and vegetables.
         We are able to deliver our products in bulk and small quantities, right within the specified time frame.Organic manure has become a wide component of agri-business models across the  country with very low initial investment and we are the best Organic manure producers.
The company is backed by the advanced manufacturing unit, which is spread over an area of 5 acres. 
Our infrastructure comprises of a well equipped Processing unit and a spacious Warehousing facility.
        To ensure that our products are rich in quality and effective, the qualified team supervises the entire production, testing, and packaging processes.</p>
    </div>
     <div ><img className="imge" src={plant} alt="" /></div>
</div>  
<div className="icon">
        
        <a href="#" className="org"><img src={seed} /></a>
        <p className="organic">100% Organic</p>
        <p className="proo">Organic products</p>
        <a href="#" className="ser" ><img src={cog} /></a>
        <p className="vice">Service</p>
        <p className="bes">We give best service</p>
        <a href="#" className="cl"><img src={check} width="70px" /></a>
        <p className="qual">Quality</p>
        <p className="ity"> 100% Quality check</p>
        <a href="#" className="thumb"><img src={thumb}  /></a>
        <p className="prod">Product</p>
        <p className="good">Good and Certified products</p>
        <a href="#" className="coin"><img src={coin} /></a>
        <p className="price">Reasonable Price</p>
        <p className="reason">Consistent quality and price</p>
        <a href="#" className="re"><img src={recycle} /></a>
        <p className="cycle">Waste Recycling</p>
        <p className="best">Best handling of wastes</p>
</div>
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

export default About
