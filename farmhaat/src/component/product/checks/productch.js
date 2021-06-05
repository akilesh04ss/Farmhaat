import React from "react";
import "./product.css";
import logo from "../../../assets/logonew.png";
import coir from "../../../assets/oir.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function Productch() {
  return (
    <div className="pw">
      <div className="hed">
        <div className="pheader">
          <div className="lsj">
            <img className="losgo" src={logo} alt="logo" width="80px" />
          </div>
          <nav>
            <ul className="likn">
              <li className="vid">
                <a class="ocde" href="./home.html">
                  Home
                </a>
              </li>
              <li className="vid">
                <a className="odc" href="./product.html">
                  Products
                </a>
              </li>
              <li className="vid">
                <a className="cdo" href="./investors.html">
                  Investors
                </a>
              </li>
              <li className="vid">
                <a className="do" href="./about.html">
                  About
                </a>
              </li>
            </ul>
            <a className="ctda" href="./feedback.html">
              <button className="bttdn1">Cart</button>
            </a>
            <a className="ctda" href="./feedback.html">
              <button className="bttdn1">Get in Touch</button>
            </a>
          </nav>
        </div>
      </div>
      <div className="cdntainer">
        <div className="csrd">
          <div className="imgdBx">
            <div className="coirs">
              <img src={coir} alt="coir brick" />
            </div>
          </div>
          <div className="contentdBx">
            <h2 className="h2">Coir Brick</h2>
            <div className="pricesd">
              <h3 className="h3">Price(Rs/kg) :</h3>
              <span className="span">200.00</span>
            </div>
            <a className="tiv" href="./view.html">
              View it!
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="mainontent">
          <div className="lefts boxs">
            <h2 className="contacus">Contact us</h2>
            <div className="cdntent">
              <div className="prophone">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <span className="propho">
                  &nbsp; 0421 123456 &nbsp;+91 8190029732
                </span>
              </div>
              <br></br>
              <div className="proemail">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="promail">
                  &nbsp;&nbsp;contact.farmhaat@gmail.com
                </span>
              </div>
              <div className="prosocial">
                <a className="proa" href="#">
                  <span className="prospan">
                    <FontAwesomeIcon icon={faFacebook} color=" white" />
                  </span>
                </a>
                <a className="proa" href="#">
                  <span className="prospan">
                    <FontAwesomeIcon icon={faInstagram} color=" white" />
                  </span>
                </a>
                <a className="proa" href="#">
                  <span className="prospan">
                    <FontAwesomeIcon icon={faWhatsapp} color=" white" />
                  </span>
                </a>
                <a className="proa" href="#">
                  <span className="prospan">
                    <FontAwesomeIcon icon={faTwitter} color=" white" />
                  </span>
                </a>
                <a className="proa" href="#">
                  <span className="prospan">
                    <FontAwesomeIcon icon={faYoutube} color=" white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="centers boxs">
            <h2 className="address">Address</h2>
            <div className="cdntent">
              <div className="addplace">
                <span>
                  <FontAwesomeIcon icon={faStreetView} />
                </span>
                <span className="addText">
                  &nbsp;&nbsp;2/827, Vellagoundan Thottam,
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ganapathipalayam, <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tirupur -641605
                </span>
              </div>
              <a
                className="addctas"
                href="https://www.google.co.in/maps/place/Vellagoundan+Thottam/@11.0379345,77.3374261,17z/data=!4m12!1m5!8m4!1e4!2s117202927009810744605!3m1!1e1!3m5!1s0x3ba9a9e86124b215:0xa552b05896b8138e!8m2!3d11.0377253!4d77.3373566!16s%2Fg%2F11pb17br0b?hl=en"
              >
                <button className="addbtton">Locate us</button>
              </a>
            </div>
          </div>
          <div className="rights boxs">
            <h2 className="quicks">Quick links</h2>
            <div className="cdntents">
              <ul className="rightsul">
                <li className="rightsli">
                  <a className="rightsa" href="./home.html">
                    Home
                  </a>
                </li>
                <li className="rightsli">
                  <a className="rightsa" href="./feedback.html">
                    Feedback
                  </a>
                </li>
                <li className="rightsli">
                  <a className="rightsa" href="./product.html">
                    Product
                  </a>
                </li>
                <li className="rightsli">
                  <a className="rightsa" href="./investors.html">
                    Investor
                  </a>
                </li>
                <li className="rightsli">
                  <a className="rightsa" href="./register.html">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productch;
