import React, { useState } from "react";
import "./home.css";
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
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";
function Home() {
  const cookies = new Cookies();
  var cookie = cookies.get("login");
  var usercookie = cookies.get("user");
  var cookieget = cookie === "true" ? "/product" : "/login";
  var cookieinvs = cookie === "true" ? "/investors" : "/login";
  var cookieabt = cookie === "true" ? "/about" : "/login";
  var cookiecart = cookie === "true" ? "/cart" : "/login";
  var cookiefeedback = cookie === "true" ? "/feedback" : "/login";
  var cookieorder = cookie === "true" ? "/ordereditem" : "/login";
  const [clicked, setClicked] = useState(false);
  var fbclick = () => {
    setClicked(true);
    if (clicked) {
      window.open("http://facebook.com", "_blank");
    }
  };
  const [insta, setinsta] = useState(false);
  var instafn = () => {
    setinsta(true);
    if (insta) {
      window.open("http://instagram.com", "_blank");
    }
  };
  const [whtsapp, setwhtsapp] = useState(false);
  var whts = () => {
    setwhtsapp(true);
    if (whtsapp) {
      window.open("http://web.whatsapp.com", "_blank");
    }
  };
  const [utbe, setutbe] = useState(false);
  var utube = () => {
    setutbe(true);
    if (utbe) {
      window.open("http://youtube.com", "_blank");
    }
  };
  const [twt, settwt] = useState(false);
  var twit = () => {
    settwt(true);
    if (twt) {
      window.open("http://twitter.com", "_blank");
    }
  };
  var logouts = () => {
    cookies.set("login", "false");
    cookies.set("user", "User");
  };
  var logout =
    cookie == "true" ? (
      <li className="li">
        <Link className="ak" to="/" onClick={logouts}>
          <i>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </i>
          Log out
        </Link>
      </li>
    ) : null;
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
              <li className="div">
                <Link to={cookieget} className="od">
                  Products
                </Link>
              </li>
              <li className="div">
                <Link to={cookieinvs} className="cod">
                  Investors
                </Link>
              </li>
              <li className="div">
                <Link to={cookieabt} className="ocd">
                  About
                </Link>
              </li>
            </ul>
            <Link className="ctad" to={cookiefeedback}>
              <button className="btton1">Get in Touch</button>
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
            <Link className="ak" to="/login">
              <i>
                <FontAwesomeIcon icon={faUserCircle} />
              </i>
              {usercookie}
            </Link>
          </li>
          <li className="li">
            <Link className="ak" to={cookiecart}>
              <i>
                <FontAwesomeIcon icon={faCartPlus} />
              </i>
              Cart
            </Link>
          </li>
          <li className="li">
            <Link className="ak" to={cookieorder}>
              <i>
                <FontAwesomeIcon icon={faTruckLoading} />
              </i>
              Ordered item
            </Link>
          </li>
          {logout}
        </ul>
      </div>
      <div>
        <div className="we">
          <h1 className="farmhaat">FARMHAAT</h1>
        </div>
      </div>
      <div className="soc">
        <Link onClick={fbclick}>
          <span>
            <FontAwesomeIcon className="fb" icon={faFacebook} color="black" />
          </span>
        </Link>
        <Link onClick={instafn}>
          <span>
            <FontAwesomeIcon
              className="insta"
              icon={faInstagram}
              color="black"
            />
          </span>
        </Link>
        <Link onClick={whts}>
          <span>
            <FontAwesomeIcon className="wht" icon={faWhatsapp} color="black" />
          </span>
        </Link>
        <Link onClick={twit}>
          <span>
            <FontAwesomeIcon className="twt" icon={faTwitter} color="black" />
          </span>
        </Link>
        <Link onClick={utube}>
          <span>
            <FontAwesomeIcon className="utb" icon={faYoutube} color="black" />
          </span>
        </Link>
      </div>
      <div className="ce">
        <p>LET US GO WITH THE FLOW OF NATURE!</p>
      </div>
      <Link to={cookieabt}>
        <button className="btton3">Take a tour</button>
      </Link>
      <div className="end">
        <p>
          Copyrights
          <i className="homei">
            <FontAwesomeIcon icon={faCopyright} />
          </i>
          2020 - 2021 Farmhaat Industry. Powered by Akilesh
        </p>
      </div>
    </div>
  );
}

export default Home;
