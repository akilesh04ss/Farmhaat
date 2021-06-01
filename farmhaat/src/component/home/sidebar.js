import React from 'react'
import cancel from '../../assets/more4.png'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';
function Sidebar() {
    return (
        <div>

            <input type="checkbox" id="check"/>
    <label for="check">
        <i><FontAwesomeIcon id="btn" icon={faBars} color="white" /></i>
        <i><img src ={cancel} id="cancel" width="30x"/></i>
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
        </div>
    )
}

export default Sidebar
