import React from "react";
import "./ordereditem.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logonew.png";
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
function Ordereditem() {
  return (
    <div className="oibackground">
      <div className="orihead">
        <div className="oriheader">
          <div className="orilj">
            <img className="orilogo" src={logo} alt="logo" width="80px" />
          </div>
          <nav>
            <ul className="orilin">
              <li className="orili">
                <Link className="orioce" to="/">
                  Home
                </Link>
              </li>
              <li className="orili">
                <Link className="orioc" to="/product">
                  Products
                </Link>
              </li>
              <li className="orili">
                <Link className="orico" to="/investors">
                  Investors
                </Link>
              </li>
              <li className="orili">
                <Link className="orio" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link className="oricta" to="/feedback">
              <button className="oributton1">Get in Touch</button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="oricontainer oricart">
        <table className="oritd">
          <tr>
            <th className="orith">Product</th>
            <th class="oridd orith"> Delivery Date</th>
            <th class="oriprice orith">Price</th>
          </tr>
          <tr>
            <td className="oritd">
              <div class="oriinfo">
                <img className="orimg" src={coir} />
                <div>
                  <br></br>
                  <p className="oribri">Coir Brick</p>
                </div>
              </div>
            </td>
            <td className="orirs oritd">Rs 200</td>
            <td className="oripr oritd">20th April</td>
            <td className="oria oritd">
              <Link to="/viewdetails">View details</Link>
            </td>
          </tr>
          <div className="oriline"></div>
          <tr>
            <td className="oritd">
              <div className="oriinfo">
                <img className="orimg" src={coir}></img>
                <div>
                  <br></br>
                  <p className="oribri">Coir Brick</p>
                </div>
              </div>
            </td>
            <td className="orirs oritd">Rs 200</td>
            <td className="oripr oritd">20th April</td>
            <td className="oriview oritd">
              <Link to="/viewdetails" className="oriview">
                View details
              </Link>
            </td>
          </tr>
        </table>
      </div>
      <div className="oricontainerc">
        <h2 className="orisim">Similar Products</h2>
        <div className="oricard">
          <div className="oriimgBx">
            <img className="oriimage" src={coir} alt="coir brick" />
          </div>
          <div className="oricontentBx">
            <h2 className="orih22">Coir Brick</h2>
            <Link to="/view" className="oriaw">
              view it!
            </Link>
          </div>
        </div>
      </div>
      <div className="orifooter">
        <div className="orimaincontent">
          <div className="orileft oribox">
            <h2 className="oricontact">Contact us</h2>
            <div className="oricontent">
              <div className="oriphone">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <span className="oripho">
                  &nbsp; 0421 123456 &nbsp;+91 8190029732
                </span>
              </div>
              <br></br>
              <div className="oriemail">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="orimail">
                  &nbsp;&nbsp;contact.farmhaat@gmail.com
                </span>
              </div>
              <div className="orisocial">
                <a className="orisociala" href="www.facebook.com">
                  <span className="orisocialspan">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </a>
                <a className="orisociala" href="www.instagram.com">
                  <span className="orisocialspan">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </a>
                <a className="orisociala" href="www.whatsapp.com">
                  <span className="orisocialspan">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </a>
                <a className="orisociala" href="www.twitter.com">
                  <span className="orisocialspan">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </a>
                <a className="orisociala" href="www.youtube.com">
                  <span className="orisocialspan">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="oricenter oribox">
            <h2 className="oriaddress">Address</h2>
            <div className="oricontent">
              <div className="oriplace">
                <span>
                  <FontAwesomeIcon icon={faStreetView} />
                </span>
                <span className="oriText">
                  &nbsp;&nbsp;2/827, Vellagoundan Thottam,
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ganapathipalayam, <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tirupur -641605
                </span>
              </div>
              <a
                className="orictas"
                href="https://www.google.co.in/maps/place/Vellagoundan+Thottam/@11.0379345,77.3374261,17z/data=!4m12!1m5!8m4!1e4!2s117202927009810744605!3m1!1e1!3m5!1s0x3ba9a9e86124b215:0xa552b05896b8138e!8m2!3d11.0377253!4d77.3373566!16s%2Fg%2F11pb17br0b?hl=en"
              >
                <button className="oributton2">Locate us</button>
              </a>
            </div>
          </div>
          <div className="oriright oribox">
            <h2 className="oriquick">Quick links</h2>
            <div className="oricontents">
              <ul className="orirightul">
                <li className="orirightli">
                  <Link className="oririghta" to="/">
                    Home
                  </Link>
                </li>
                <li className="orirightli">
                  <Link className="oririghta" to="/feedback">
                    Feedback
                  </Link>
                </li>
                <li className="orirightli">
                  <Link className="oririghta" to="/product">
                    Product
                  </Link>
                </li>
                <li className="orirightli">
                  <Link className="oririghta" to="/investors">
                    Investor
                  </Link>
                </li>
                <li className="orirightli">
                  <Link className="oririghta" to="/register">
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

export default Ordereditem;
