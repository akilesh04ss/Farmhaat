import React from "react";
import "./view.css";
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
function Viewch() {
  return (
    <div className="viewchdiv">
      <div className="viewhead">
        <div className="headerview">
          <div className="viewlj">
            <img className="viewlogo" src={logo} alt="logo" width="80px" />
          </div>
          <nav>
            <ul className="viewlin">
              <li className="viewli">
                <a class="viewoce" href="./home.html">
                  Home
                </a>
              </li>
              <li className="viewli">
                <a class="viewoc" href="./product.html">
                  Products
                </a>
              </li>
              <li className="viewli">
                <a class="viewco" href="./investors.html">
                  Investors
                </a>
              </li>
              <li className="viewli">
                <a class="viewo" href="./about.html">
                  About
                </a>
              </li>
            </ul>
            <a className="viewcta" href="./feedback.html">
              <button className="viewbutton1">Get in Touch</button>
            </a>
          </nav>
        </div>
      </div>
      <div className="viewcon">
        <table className="viewtable">
          <tr className="viewtr">
            <td className="viewtd">
              <img className="viewimg" src={coir} alt="" />
              <div className="viewinf">
                <h1 className="viewoin">Coir Brick</h1>
                <small className="viewpt">Price(Rs/Kg): 200</small>
                <br></br>
                <p className="viewqt">Quantity(kg) :</p>
                <input className="viewinput" type="number" value="1" min="1" />
              </div>
            </td>
          </tr>

          <tr className="viewtr">
            <p class="viewsa">
              <a className="viewop">Description:</a>
              <br></br>* It will come in brick form of 5 KG. <br></br>* Useful
              for potting mix, maintain water level.<br></br>* Put directly into
              the water to convert it into powder form.<br></br>* Useful for
              indoor & outdoor potted plants.
            </p>
          </tr>
          <tr className="viewtr">
            <button class="viewbtnss">ADD TO CART</button>
          </tr>
        </table>
      </div>
      <div className="viewfooter">
        <div className="viewmaincontent">
          <div className="viewleft viewbox">
            <h2 className="viewcontact">Contact us</h2>
            <div className="viewcontent">
              <div className="viewphone">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <span className="viewpho">
                  &nbsp; 0421 123456 &nbsp;+91 8190029732
                </span>
              </div>
              <br></br>
              <div className="viewemail">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="viewmail">
                  &nbsp;&nbsp;contact.farmhaat@gmail.com
                </span>
              </div>
              <div className="viewsocial">
                <a href="#" className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </a>
                <a href="#" className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </a>
                <a href="#" className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </a>
                <a href="#" className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </a>
                <a href="#" className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="viewcenter viewbox">
            <h2 className="viewadd">Address</h2>
            <div className="viewcontent">
              <div className="viewplace">
                <span>
                  <FontAwesomeIcon icon={faStreetView} />
                </span>
                <span className="viewText">
                  &nbsp;&nbsp;2/827, Vellagoundan Thottam,
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ganapathipalayam, <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tirupur -641605
                </span>
              </div>
              <a
                className="viewctas"
                href="https://www.google.co.in/maps/place/Vellagoundan+Thottam/@11.0379345,77.3374261,17z/data=!4m12!1m5!8m4!1e4!2s117202927009810744605!3m1!1e1!3m5!1s0x3ba9a9e86124b215:0xa552b05896b8138e!8m2!3d11.0377253!4d77.3373566!16s%2Fg%2F11pb17br0b?hl=en"
              >
                <button className="viewbutton2">Locate us</button>
              </a>
            </div>
          </div>
          <div className="viewright viewbox">
            <h2 className="viewquick">Quick links</h2>
            <div className="viewcontents">
              <ul className="viewulright">
                <li className="viewliright">
                  <a classname="vieright" href="./home.html">
                    Home
                  </a>
                </li>
                <li className="viewliright">
                  <a classname="vieright" href="./feedback.html">
                    Feedback
                  </a>
                </li>
                <li className="viewliright">
                  <a classname="vieright" href="./product.html">
                    Product
                  </a>
                </li>
                <li className="viewliright">
                  <a classname="vieright" href="./investors.html">
                    Investor
                  </a>
                </li>
                <li className="viewliright">
                  <a classname="vieright" href="./register.html">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Viewch;
