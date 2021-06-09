import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logonew.png";
import "./viewdetails.css";
import coir from "../../assets/oir.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
function Viewdetails() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
              <button className="vdbutton1">Get in Touch</button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="vdcon">
        <table className="vdtable">
          <tr>
            <td className="vdtd">
              <img className="vdimg" src={coir} alt="" />
              <div className="vdinf">
                <h2 className="vdh2">Coir Brick</h2>
                <small className="vdsmall">Price: 200</small>
                <br></br>
              </div>
            </td>
            <td className="vdtd">
              <div className="vdrpdiv">
                <p className="vdrp">Ordered Date:</p>
                <p className="vdrp"> 19th April</p>
              </div>
            </td>
            <td className="vdtd">
              <div className="vdprdiv">
                <p className="vdpr">Delivery Date:</p>
                <p className="vdpr"> 20th April</p>
              </div>
            </td>
          </tr>
          <tr>
            <div className="vdqwdiv">
              <p className="vdqw">Quantity:</p>
              <p className="vdqws">2</p>
            </div>
          </tr>
          <tr>
            <p className="vdad">Adrress: </p>
            <br></br>
            <p className="vdads">
              {" "}
              2/827,Vellagoundan Thottam, Ganapathipalayam,Tirupur-5
            </p>
          </tr>

          <tr>
            <p className="vdsa">
              Description:<br></br>
            </p>
            <p className="vdsas">
              * It will come in brick form of 5 KG. <br></br>* Useful for
              potting mix, maintain water level.<br></br>* Put directly into the
              water to convert it into powder form.
              <br></br>* Useful for indoor & outdoor potted plants.
            </p>
          </tr>
          <tr>
            <Link to="/feedback">
              <button class="vdbtnss">Feedback</button>
            </Link>
          </tr>
        </table>
      </div>
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
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="vdmail">
                  &nbsp;&nbsp;contact.farmhaat@gmail.com
                </span>
              </div>
              <div className="vdsocial">
                <a className="vdsociala" href="www.facebook.com">
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </a>
                <a className="vdsociala" href="www.instagram.com">
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </a>
                <a className="vdsociala" href="www.whatsapp.com">
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </a>
                <a className="vdsociala" href="www.twitter.com">
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </a>
                <a className="vdsociala" href="www.youtube.com">
                  <span className="vdsocialspan">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </a>
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
              <a
                className="vdctas"
                href="https://www.google.co.in/maps/place/Vellagoundan+Thottam/@11.0379345,77.3374261,17z/data=!4m12!1m5!8m4!1e4!2s117202927009810744605!3m1!1e1!3m5!1s0x3ba9a9e86124b215:0xa552b05896b8138e!8m2!3d11.0377253!4d77.3373566!16s%2Fg%2F11pb17br0b?hl=en"
              >
                <button className="vdbutton2">Locate us</button>
              </a>
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
