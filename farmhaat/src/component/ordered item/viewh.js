import React from 'react'
import logo from '../../assets/logonew.png'
import './stylevd.css'

function Viewh() {
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
    </div>
    )
}

export default Viewh
