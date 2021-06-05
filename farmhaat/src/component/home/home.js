import React from "react";
import "./check/home.css";
import { Link } from "react-router-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logonew.png";
import bk from "../../assets/bk.gif";
import cancel from "../../assets/more4.png";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Home() {
  return (
    <div className="homew">
      <div>
        <img className="background" src={bk} alt="bk" />
      </div>
      <div className="heads">
        <div className="headings">
          <div className="ljs">
            <img className="logos" src={logo} alt="logo" width="80px" />
          </div>

          <nav>
            <ul className="link">
              {/* <Link to="/product"> */}
              <li className="div">
                <a className="od">Products</a>
              </li>
              {/* </Link> */}
              {/* <Link to="/investor"> */}
              <li className="div">
                <a className="cod">Investors</a>
              </li>
              {/* </Link> */}
              {/* <Link to="/about"> */}
              <li className="div">
                <a className="ocd">About</a>
              </li>
              {/* </Link> */}
            </ul>
            <Link to="/feedback">
              <a className="ctad" href="./feedback.html">
                <button className="btton1">Get in Touch</button>
              </a>
            </Link>
          </nav>
        </div>
      </div>
      <input type="checkbox" id="check" />
      <label for="check">
        <i id="btn">
          <FontAwesomeIcon icon={faBars} color="white" />
        </i>
        <i>
          <img src={cancel} id="cancel" width="40x" />
        </i>
      </label>
      <div className="sidebar">
        <div className="heders">Menu</div>
        <ul className="ul">
          <li className="li">
            <a className="ak" href="./login.html">
              <i>
                <FontAwesomeIcon icon={faUserCircle} />
              </i>
              User
            </a>
          </li>
          <li className="li">
            <a className="ak" href="./cart.html">
              <i>
                <FontAwesomeIcon icon={faCartPlus} />
              </i>
              Cart
            </a>
          </li>
          <li className="li">
            <a className="ak" href="./oredered item.html">
              <i>
                <FontAwesomeIcon icon={faTruckLoading} />
              </i>
              Ordered item
            </a>
          </li>
          <li className="li">
            <a className="ak" href="#">
              <i>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </i>
              Log out
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="we">
          <h1 className="farmhaat">FARMHAAT</h1>
        </div>
      </div>
      <div className="soc">
        <a href="#">
          {" "}
          <span>
            <FontAwesomeIcon className="fb" icon={faFacebook} color="black" />
          </span>
        </a>
        <a href="#">
          {" "}
          <span>
            <FontAwesomeIcon
              className="insta"
              icon={faInstagram}
              color="black"
            />
          </span>
        </a>
        <a href="https://www.youtube.com/watch?v=eiGdsH1g20k">
          {" "}
          <span>
            <FontAwesomeIcon className="wht" icon={faWhatsapp} color="black" />
          </span>
        </a>
        <a href="https://www.youtube.com/watch?v=eiGdsH1g20k">
          <span>
            <FontAwesomeIcon className="twt" icon={faTwitter} color="black" />
          </span>
        </a>
        <a href="#">
          <span>
            <FontAwesomeIcon className="utb" icon={faYoutube} color="black" />
          </span>
        </a>
      </div>
      <div className="ce">
        <p>LET US GO WITH THE FLOW OF NATURE!</p>
      </div>
      <a href="./about.html">
        <button className="btton3">Take a tour</button>
      </a>
      <div className="end">
        <p>
          Copyrights{" "}
          <i>
            <FontAwesomeIcon icon={faCopyright} />
          </i>{" "}
          2020 - 2021 Farmhaat Industry. Powered by Akilesh
        </p>
      </div>
    </div>
  );
}

export default Home;
