import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logonew.png";
import "./viewdetails.css";
import Cookies from "universal-cookie";
import track from "../../assets/Vespa.gif";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
function Viewdetails(props) {
  const cookies = new Cookies();
  var logouts = () => {
    cookies.set("login", "false");
    cookies.set("user", "User");
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [arrowget1, setarrowget1] = useState([]);
  useEffect(async () => {
    var getarray = await axios.get("http://localhost:2000/farmhaat/order");
    console.log(getarray);
    setarrowget1(getarray.data);
    // console.log("id", id);
    console.log(arrowget1);
  }, []);
  var id = props.match.params._id;
  var sliceid = id.slice(1);
  var filterarray = arrowget1.filter((e) => e._id === sliceid);
  console.log(props.match.params._id);
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
  const [map, setmap] = useState(false);
  var locate = () => {
    setmap(true);
    if (map) {
      window.open(
        "https://www.google.co.in/maps/place/Vellagoundan+Thottam/@11.0379345,77.3374261,17z/data=!4m12!1m5!8m4!1e4!2s117202927009810744605!3m1!1e1!3m5!1s0x3ba9a9e86124b215:0xa552b05896b8138e!8m2!3d11.0377253!4d77.3373566!16s%2Fg%2F11pb17br0b?hl=en",
        "_blank"
      );
    }
  };
  var get3 = filterarray.map((get) => (
    <div className="vdcon">
      <table className="vdtable">
        <tr>
          <td className="vdtd">
            <img className="vdimg" src={get.Image} alt="" />
            <div className="vdinf">
              <h2 className="vdh2">{get.Name}</h2>
              <small className="vdsmall">
                Price: {get.Quantity * get.Price}
              </small>
              <br></br>
            </div>
          </td>
          <td className="vdtd">
            <div className="vdrpdiv">
              <p className="vdrp">Ordered Date:</p>
              <p className="vdrp">{get.Order.slice(0, 10)}</p>
            </div>
          </td>
          <td className="vdtd">
            <div className="vdprdiv">
              <p className="vdpr">Delivery Date:</p>
              <p className="vdpr"> {get.Delivery.slice(0, 10)}</p>
            </div>
          </td>
        </tr>
        <tr>
          <div className="vdqwdiv">
            <p className="vdqw">Quantity:</p>
            <p className="vdqws">{get.Quantity}</p>
          </div>
        </tr>

        <tr>
          <p className="vdsa">
            Description:<br></br>
          </p>
          <p className="vdsas">
            * {get.des1} <br></br>* {get.des2}
            <br></br>* {get.des3}
            <br></br>* {get.des4}
          </p>
          <img src={track} className="track" />
        </tr>
        <tr>
          <Link to="/" onClick={logouts} className="vdlink">
            <button class="vdbtnss">Feedback</button>
          </Link>
        </tr>
      </table>
    </div>
  ));
  return (
    <div className="vdbk">
      <div className="vdhead">
        <div className="vdheader">
          <div className="vdlj">
            <img className="vdlogo" src={logo} alt="logo" width="80px" />
          </div>
          <nav>
            <ul className="vdlin">
              <li className="vdli">
                <Link className="vdoce" to="/">
                  Home
                </Link>
              </li>
              <li className="vdli">
                <Link className="vdoc" to="/product">
                  Products
                </Link>
              </li>
              <li className="vdli">
                <Link className="vdco" to="/investors">
                  Investors
                </Link>
              </li>
              <li className="vdli">
                <Link className="vdo" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link className="vdcta" to="/feedback">
              <button className="vdbutton1">Log out</button>
            </Link>
          </nav>
        </div>
      </div>
      {get3}
      <div className="vdfooter">
        <div className="vdmaincontent">
          <div className="vdleft vdbox">
            <h2 className="vdcontact">Contact us</h2>
            <div className="vdcontent">
              <div className="vdphone">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <span className="pho">
                  &nbsp; 0421 123456 &nbsp;+91 8190029732
                </span>
              </div>
              <br></br>
              <div className="vdemail">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akilesh04.ss@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="vdmail">
                    &nbsp;&nbsp;contact.farmhaat@gmail.com
                  </span>
                </a>
              </div>
              <div className="vdsocial">
                <Link className="vdsociala" onClick={fbclick}>
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </Link>
                <Link className="vdsociala" onClick={instafn}>
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </Link>
                <Link className="vdsociala" onClick={whts}>
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </Link>
                <Link className="vdsociala" onClick={twit}>
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </Link>
                <Link className="vdsociala" onClick={utube}>
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="vdcenter vdbox">
            <h2 className="vdaddress">Address</h2>
            <div className="vdcontent">
              <div className="vdplace">
                <span>
                  <FontAwesomeIcon icon={faStreetView} />
                </span>
                <span className="vdText">
                  &nbsp;&nbsp;2/827, Vellagoundan Thottam,
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ganapathipalayam, <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tirupur -641605
                </span>
              </div>
              <Link className="vdctas" onClick={locate}>
                <button className="vdbutton2">Locate us</button>
              </Link>
            </div>
          </div>
          <div className="vdright vdbox">
            <h2 className="vdquick">Quick links</h2>
            <div className="vdcontents">
              <ul className="vdrightul">
                <li className="vdrightli">
                  <Link className="vdrighta" to="/">
                    Home
                  </Link>
                </li>
                <li className="vdrightli">
                  <Link className="vdrighta" to="/feedback">
                    Feedback
                  </Link>
                </li>
                <li className="vdrightli">
                  <Link className="vdrighta" to="/product">
                    Product
                  </Link>
                </li>
                <li className="vdrightli">
                  <Link className="vdrighta" to="/investors">
                    Investor
                  </Link>
                </li>
                <li className="vdrightli">
                  <Link className="vdrighta" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewdetails;
