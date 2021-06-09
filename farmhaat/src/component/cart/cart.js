import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import log from "../../assets/logonew.png";
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

function Cart() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="cartbackground">
      <div className="carthead">
        <div className="cartheader">
          <div className="cartlj">
            <img className="cartlogo" src={log} alt="logo" width="80px" />
          </div>
          <nav>
            <ul className="cartlin">
              <li className="cartli">
                <Link className="cartoce" to="/">
                  Home
                </Link>
              </li>
              <li className="cartli">
                <Link className="cartoc" to="/product">
                  Products
                </Link>
              </li>
              <li className="cartli">
                <Link className="cartco" to="/investors">
                  Investors
                </Link>
              </li>
              <li className="cartli">
                <Link className="carto" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link className="cartcta" to="/feedback">
              <button className="cartbutton1">Get in Touch</button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="carcontainer carcart">
        <table className="cartable">
          <tr className="cartr">
            <th className="carth">Product</th>
            <th className="carth carquan">Quantity</th>
            <th className="carth carsub">Amount</th>
          </tr>
          <tr className="cartr">
            <td className="cartd">
              <div className="carinfo">
                <img className="carimg" src={coir} />
                <div className="carcon">
                  <p className="carp1">Coir Brick</p>
                  <small className="carsmall">Price(Rs/kg): 200</small>
                  <br></br>
                  <a className="cara1" href="#">
                    Remove
                  </a>
                </div>
              </div>
            </td>
            <td className="cartd ">
              <input
                className="carinput carinp"
                type="number"
                value="1"
                min="1"
              />
            </td>
            <td className="cartd carpr">200</td>
          </tr>
          <tr className="cartr">
            <div className="carline"></div>
            <td className="cartd">
              <div classname="carinfo">
                <img className="cartoh" src={coir} />
                <div className="carten">
                  <p className="carp1">Coir Brick</p>
                  <small className="carsmall">Price(Rs/kg): 200</small>
                  <br></br>
                  <a className="cara1" href="#">
                    Remove
                  </a>
                </div>
              </div>
            </td>
            <td className="cartd">
              <input className="carinput carinpu" type="number" value="1" />
            </td>
            <td class="cartd carpri">200</td>
          </tr>
        </table>
      </div>
      <div className="carcontainer carcart">
        <div class="cartotal">
          <table className="cartable">
            <tr className="cartr">
              <td className="cartd">Sub-total</td>
              <td className="cartd">Rs 400</td>
            </tr>
            <tr className="cartr">
              <td className="cartd">tax</td>
              <td className="cartd">Rs 10</td>
            </tr>
            <tr className="cartr">
              <td className="cartd">Total</td>
              <td className="cartd">Rs 410</td>
            </tr>
            <tr className="cartr">
              <button className="carbuy">Buy</button>
            </tr>
          </table>
        </div>
      </div>
      <div className="cartfooter">
        <div className="cartmaincontent">
          <div className="cartleft cartbox">
            <h2 className="cartleftcontact">Contact us</h2>
            <div className="cartcontent">
              <div className="cartphone">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <span className="cartpho">
                  &nbsp; 0421 123456 &nbsp;+91 8190029732
                </span>
              </div>
              <br></br>
              <div className="cartemail">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="cartmail">
                  &nbsp;&nbsp;contact.farmhaat@gmail.com
                </span>
              </div>
              <div className="cartsocial">
                <a className="cartsociala" href="www.facebook.com">
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </a>
                <a className="cartsociala" href="www.instagram.com">
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </a>
                <a className="cartsociala" href="www.whatsapp.com">
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </a>
                <a className="cartsociala" href="www.twitter.com">
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </a>
                <a className="cartsociala" href="www.youtube.com">
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="cartcenter cartbox">
            <h2 className="cartaddress">Address</h2>
            <div className="cartcontent">
              <div className="cartplace">
                <span>
                  <FontAwesomeIcon icon={faStreetView} />
                </span>
                <span className="cartText">
                  &nbsp;&nbsp;2/827, Vellagoundan Thottam,
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ganapathipalayam, <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tirupur -641605
                </span>
              </div>
              <a
                className="cartctas"
                href="https://www.google.co.in/maps/place/Vellagoundan+Thottam/@11.0379345,77.3374261,17z/data=!4m12!1m5!8m4!1e4!2s117202927009810744605!3m1!1e1!3m5!1s0x3ba9a9e86124b215:0xa552b05896b8138e!8m2!3d11.0377253!4d77.3373566!16s%2Fg%2F11pb17br0b?hl=en"
                target="-blank"
              >
                <button className="cartbutton2">Locate us</button>
              </a>
            </div>
          </div>
          <div className="cartright cartbox">
            <h2 className="cartquick">Quick links</h2>
            <div className="cartcontents">
              <ul className="cartrightul">
                <li className="cartrightli">
                  <Link className="cartrighta" to="/">
                    Home
                  </Link>
                </li>
                <li className="cartrightli">
                  <Link className="cartrighta" to="/feedback">
                    Feedback
                  </Link>
                </li>
                <li className="cartrightli">
                  <Link className="cartrighta" to="/product">
                    Product
                  </Link>
                </li>
                <li className="cartrightli">
                  <Link className="cartrighta" to="/investors">
                    Investor
                  </Link>
                </li>
                <li className="cartrightli">
                  <Link className="cartrighta" to="/register">
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

export default Cart;
