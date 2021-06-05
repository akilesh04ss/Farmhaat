import React from "react";
import "./investors.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logonew.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Investors() {
  return (
    <div className="invbackground">
      <div className="invhead">
        <div className="invheader">
          <div className="invlj">
            <img className="invlogo" src={logo} alt="logo" width="80px" />
          </div>
          <nav>
            <ul className="invlin">
              <li className="invli">
                <Link class="invoce" to="/">
                  Home
                </Link>
              </li>
              <li className="invli">
                <Link className="invco" to="/product">
                  Products
                </Link>
              </li>
              <li className="invli">
                <Link className="invoc" to="/investors">
                  Investors
                </Link>
              </li>
              <li className="invli">
                <Link className="invo" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link className="invcta" to="/feedback">
              <button className="invbutton1">Get in Touch</button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="invcontainer">
        <div className="invtext">Request Form</div>
        <form action="#" className="invform">
          <div className="invformrow">
            <div className="invinputdata invname">
              <input className="invinput " type="text" required />
              <div className="invunderline"></div>
              <label className="invlabel">Name*</label>
            </div>
          </div>
          <div className="invformrow">
            <div className="invinputdata">
              <input className="invinput" type="email" required />
              <div className="invunderline"></div>
              <label className="invlabel">Email id*</label>
            </div>
            <div className="invinputdata">
              <input className="invinput" type="text" required />
              <div className="invunderline"></div>
              <label className="invlabel">User id*</label>
            </div>
          </div>
          <div className="invformrow">
            <div className="invinputdata">
              <input className="invinput" type="text" required />
              <div className="invunderline"></div>
              <label className="invlabel">Material*</label>
            </div>
            <div className="invinputdata">
              <input className="invinput" type="text" required />
              <div className="invunderline"></div>
              <label className="invlabel">weight*</label>
            </div>
          </div>
          <br></br>

          <div className="invformrow ">
            <div className="invinputdata invtextarea">
              <textarea
                className="invtextareain"
                cols="30"
                rows="10"
                required
              ></textarea>
              <div className="invunderline"></div>
              <label className="invlabel">Description*</label>
            </div>
          </div>
          <div className="invformrow invsubmitbtn">
            <div className="invinputdata">
              <div className="invinner"></div>
              <input
                className="invinput"
                type="submit"
                value="Request for pickup"
              />
            </div>
          </div>
        </form>
      </div>
      <marquee behavior="" direction="">
        <h1 className="invkud">
          NOTE: The waste that you sell should not contain plastics and other
          elctronic waste. The waste should be packed properly before the
          pickup.
        </h1>
      </marquee>
      <div className="invfooter">
        <div className="invmaincontent">
          <div className="invleft invbox">
            <h2 className="invcontact">Contact us</h2>
            <div className="invcontent">
              <div className="invphone">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <span className="invpho">
                  &nbsp; 0421 123456 &nbsp;+91 8190029732
                </span>
              </div>
              <br></br>
              <div className="invemail">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="invmail">
                  &nbsp;&nbsp;contact.farmhaat@gmail.com
                </span>
              </div>
              <div className="invsocial">
                <a className="invaleft" href="www.facebook.com">
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </a>
                <a className="invaleft" href="www.instagram.com">
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </a>
                <a className="invaleft" href="www.whatsapp.com">
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </a>
                <a className="invaleft" href="www.twitter.com">
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </a>
                <a className="invaleft" href="www.youtube.com">
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="invcenter invbox">
            <h2 className="invaddress">Address</h2>
            <div className="invcontent">
              <div className="invplace">
                <span>
                  <FontAwesomeIcon icon={faStreetView} />
                </span>
                <span className="invText1">
                  &nbsp;&nbsp;2/827, Vellagoundan Thottam,
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ganapathipalayam, <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tirupur -641605
                </span>
              </div>
              <a
                className="invctas"
                href="https://www.google.co.in/maps/place/Vellagoundan+Thottam/@11.0379345,77.3374261,17z/data=!4m12!1m5!8m4!1e4!2s117202927009810744605!3m1!1e1!3m5!1s0x3ba9a9e86124b215:0xa552b05896b8138e!8m2!3d11.0377253!4d77.3373566!16s%2Fg%2F11pb17br0b?hl=en"
              >
                <button className="invbutton3">Locate us</button>
              </a>
            </div>
          </div>
          <div className="invright invbox">
            <h2 className="invquick">Quick links</h2>
            <div className="invcontents">
              <ul className="invul2">
                <li className="invli2">
                  <Link className="invrighta" to="/">
                    Home
                  </Link>
                </li>
                <li className="invli2">
                  <Link className="invrighta" to="/feedback">
                    Feedback
                  </Link>
                </li>
                <li className="invli2">
                  <Link className="invrighta" to="/product">
                    Product
                  </Link>
                </li>
                <li className="invli2">
                  <Link className="invrighta" to="/investors">
                    Investor
                  </Link>
                </li>
                <li className="invli2">
                  <Link className="invrighta" to="/register">
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

export default Investors;
