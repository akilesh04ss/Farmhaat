import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import log from "../../assets/logonew.png";
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
import axios from "axios";
function Cart() {
  const [arrowget, setarrowget] = useState([]);
  useEffect(async () => {
    var getarray = await axios.get("http://localhost:2000/farmhaat/cart");
    console.log(getarray);
    setarrowget(getarray.data);
    console.log(arrowget);
  }, []);

  var post = () => {
    console.log(arrowget, "post");
    console.log("post");
    arrowget.map(
      async (get) =>
        await axios.post("http://localhost:2000/farmhaat/order", get)
    );
    alert("Order placed!!");
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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

  var get1 = arrowget.map((get) => (
    <div className="getting">
      <tr className="cartr">
        <td className="cartd">
          <div className="carinfo">
            <img className="carimg" src={get.Image} />
            <div className="carcon">
              <p className="carp1">{get.Name}</p>
              <small className="carsmall">Price(Rs/kg):{get.Price}</small>
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
            value={get.Quantity}
            max="2"
          />
        </td>
        <td className="cartd carpr">200</td>
        <div className="carline"></div>
      </tr>
    </div>
  ));

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
              <button className="cartbutton1">Log out</button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="carcontainer carcart">
        <table className="cartable">
          <tr className="cartr carttr">
            <th className="carth">Product</th>
            <th className="carth carquan">Quantity</th>
            <th className="carth carsub">Amount</th>
          </tr>
          {get1}
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
              <button className="carbuy" onClick={post}>
                Buy
              </button>
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
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akilesh04.ss@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="cartmail">
                    &nbsp;&nbsp;contact.farmhaat@gmail.com
                  </span>
                </a>
              </div>
              <div className="cartsocial">
                <Link className="cartsociala" onClick={fbclick}>
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </Link>
                <Link className="cartsociala" onClick={instafn}>
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </Link>
                <Link className="cartsociala" onClick={whts}>
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </Link>
                <Link className="cartsociala" onClick={twit}>
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </Link>
                <Link className="cartsociala" onClick={utube}>
                  <span className="cartsocialspan">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </Link>
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
              <Link className="cartctas" onClick={locate}>
                <button className="cartbutton2">Locate us</button>
              </Link>
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
