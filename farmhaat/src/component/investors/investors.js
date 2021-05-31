import React from 'react'
import './stylei.css'
import logo from '../../assets/logonew.png'

function Investors() {
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
                <li><a class="oc" href="./product.html">Products</a></li>
                <li><a class="co" href="./investors.html">Investors</a></li>
                <li><a class="o" href="./about.html">About</a></li>
           </ul>
           <a className = "cta" href="./feedback.html"><button>Get in Touch</button></a>
       </nav>
   </header>
   </div>
   <div class="container">
    <div class="text">Request Form</div>
        <form action="#">
            <div class="form-row">
                <div class="input-data">
                    <input type="text" required/>
                    <div class="underline"></div>
                    <label>Name*</label>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data">
                    <input type="email" required/>
                    <div class="underline"></div>
                    <label>Email id*</label>
                </div>
                <div class="input-data">
                    <input type="text" required/>
                    <div class="underline"></div>
                    <label>User id*</label>
                </div>
            </div>
            <div class="form-row">
            <div class="input-data">
                <input type="text" required/>
                <div class="underline"></div>
                <label>Material*</label>
            </div>
                <div class="input-data">
                    <input type="text" required/>
                    <div class="underline"></div>
                    <label>weight*</label>
                </div></div>
            <div class="form-row ">
                <div class="input-data textarea">
                    <textarea class="di" cols="30" rows="10" required></textarea >
                    <div class="underline"></div>
                    <label class="des">Description*</label>
                </div>
            </div>
            <div class="form-row submit-btn">
                <div class="input-data">
                    <div class="inner"></div>
                    <input type="submit" value="Request for pickup"/>
                </div>
            </div>
        </form>
</div>
<marquee behavior="" direction="">
    <h1>NOTE: The waste that you sell should not contain plastics and other elctronic waste. The waste should be packed properly before the pickup. </h1>
</marquee>
   <footer>
        <div className="main-content">
            <div className="left box">
                <h2>Contact us</h2>
                <div className="content">
                    <div className="phone">
                        <span className="fas fa-phone-alt"></span>
                        <span className="Text">0421-123456 &nbsp; +91 8190029732</span>
                    </div>
                    <div className="email">
                        <span className="fas fa-envelope"></span>
                        <span className="Text">contact.farmhaat@gmail.com</span>
                    </div>
                    <div className="social">
                        <a href="#"> <span className="fab fa-facebook" ></span></a>
                        <a href="#"> <span className="fab fa-instagram" ></span></a>
                        <a href="#"> <span className="fab fa-whatsapp"></span></a>
                        <a href="#"><span className="fab fa-twitter" ></span></a>
                        <a href="#"><span  className="fab fa-youtube"></span></a>
                    </div>
                </div>
            </div>
            <div className="center box">
                <h2>Address</h2>
                <div className="content">
                    <div className="place">
                        <span className="fas fa-map-marker-alt"></span>
                        <span className="Text">2/827, Vellagoundan Thottam, Ganapathipalayam, Tirupur - 641605</span>
                    </div>
                    <a className = "ctas" href="https://www.google.co.in/maps/place/Vellagoundan+Thottam/@11.0418939,77.3373403,16z/data=!4m12!1m5!8m4!1e4!2s117202927009810744605!3m1!1e1!3m5!1s0x3ba9a9e86124b215:0xa552b05896b8138e!8m2!3d11.0377253!4d77.3373566!16s%2Fg%2F11pb17br0b?hl=en"><button>Locate us</button></a>
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

export default Investors
