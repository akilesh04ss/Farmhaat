import React from 'react'
import './style.css';

function Sidebar() {
    return (
        <div>
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
        </div>
    )
}

export default Sidebar
