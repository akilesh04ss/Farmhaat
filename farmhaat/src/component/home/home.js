import React from 'react';

function Home(){
    return (
<div>
    <div>
        <img className="back" src="./bk.gif" alt="bk"/> 
    </div>
    <div className="head">
        <header >
            <div className="lj">
                <img  className ="logo" src="/logonew.png" alt="logo" width="80px"/>   
            </div>
            <div className="we" ><a  href="#" ><h1>FARMHAAT</h1></a></div> 
           
            <nav>
                <ul className="lin">
                    <li><a className="o" href="./product.html">Products</a></li>
                    <li><a className="co" href="./investors.html">Investors</a></li>
                    <li><a className="oc" href="./about.html">About</a></li>
                </ul>
                <a className = "cta" href="./feedback.html"><button>Get in Touch</button></a>
            </nav>
        </header>
    </div>
    <input type="checkbox" id="check"/>
    <label for="check">
        <i classname="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
    </label>
    <div className="sidebar">
        <header>Menu</header>
        <ul>
            <li><a href="./home.html"><i className="fas fa-home"></i>Home</a></li>
            <li><a href="./login.html"><i className="fas fa-user-circle"></i>User</a></li>
            <li><a href="./cart.html"><i className="fas fa-cart-plus"></i>Cart</a></li>
            <li><a href="./oredered item.html"><i className="fas fa-truck-loading"></i>Ordered item</a></li>
            <li><a href="#"><i className="fas fa-sign-out-alt"></i>Log out</a></li>
        </ul>
    </div>
    <footer>
        <div className="social">
            <a href="#" > <span className="fab fa-facebook" ></span></a>
            <a href="#"> <span className="fab fa-instagram" ></span></a>
            <a href="https://www.youtube.com/watch?v=eiGdsH1g20k"> <span className="fab fa-whatsapp"></span></a>
            <a href="https://www.youtube.com/watch?v=eiGdsH1g20k"><span className="fab fa-twitter" ></span></a>
            <a href="#"><span  className="fab fa-youtube"></span></a>
        </div>
    </footer>
    <div class="ce">
        <p>LET US GO WITH THE FLOW OF NATURE!</p>
    </div>
    <a href="./about.html"><button className="button">Take a tour</button></a>
    <div className="end">
        <p>Copyrights <i class="fa fa-copyright" aria-hidden="true"></i>  2020 - 2021 Farmhaat Industry. Powered by Akilesh</p>
    </div>
</div>
);
}

export default Home;
