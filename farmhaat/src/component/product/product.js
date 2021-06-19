import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logonew.png";
import coir from "../../assets/oir.jpg";
import peat from "./../../assets/peat.jpg";
import mix from "../../assets//soil.jpg";
import comp from "../../assets/compost.jpg";
import hydro from "../../assets/hydro.jpg";
import moist from "../../assets/clay.jpg";
import chip from "../../assets/chips.jpg";
import manure from "../../assets/cow.jpg";
import disc from "../../assets/disc.jpg";
import soil from "../../assets/coco soil.jpg";
import spl from "../../assets/sl.jpg";
import mesh from "../../assets/mesh.jpg";
import Card from "./card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
function Product() {
  var productitems = [
    {
      name: "Coir Brick",
      price: "200",
      img: coir,
    },
    {
      name: "Coco peat",
      price: "99",
      img: peat,
    },
    {
      name: "Soil Mix",
      price: "499",
      img: mix,
    },
    {
      name: "Vermicompost",
      price: "192",
      img: comp,
    },
    {
      name: "Hydro clay balls",
      price: "700",
      img: hydro,
    },
    {
      name: "Moist clay balls ",
      price: "450",
      img: moist,
    },
    {
      name: "Coco chips",
      price: "199",
      img: chip,
    },
    {
      name: "Coir Disc",
      price: "450",
      img: disc,
    },
    {
      name: "Cow Manure",
      price: "330",
      img: manure,
    },
    {
      name: "Coir soil",
      price: "217",
      img: soil,
    },
    {
      name: "Coir Mesh",
      price: "950",
      img: mesh,
    },
    {
      name: "Special organic manure mixture",
      price: "550",
      img: spl,
    },
  ];
  var n = productitems.length;
  var arritem = [];
  for (let i = 0; i < n; i++) {
    var arrs = productitems.slice(i * 3, (i + 1) * 3);
    arritem.push(
      <div className="productarray">
        {arrs.map((arr) => (
          <div>
            <Card item={arr} />
          </div>
        ))}
      </div>
    );
  }
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
                <Link class="ocde" to="/">
                  Home
                </Link>
              </li>
              <li className="vid">
                <Link className="odc" to="/product">
                  Products
                </Link>
              </li>
              <li className="vid">
                <Link className="cdo" to="/investors">
                  Investors
                </Link>
              </li>
              <li className="vid">
                <Link className="do" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link className="ctdas" to="/cart">
              <button className="bttdn1">Cart</button>
            </Link>
            <Link className="ctda" to="/feedback">
              <button className="bttdn1">Log out</button>
            </Link>
          </nav>
        </div>
      </div>
      <div>{arritem}</div>
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
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akilesh04.ss@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="promail">
                    &nbsp;&nbsp;contact.farmhaat@gmail.com
                  </span>
                </a>
              </div>
              <div className="prosocial">
                <Link className="proa" onClick={fbclick}>
                  <span className="prospan">
                    <FontAwesomeIcon icon={faFacebook} color=" white" />
                  </span>
                </Link>
                <Link className="proa" onClick={instafn}>
                  <span className="prospan">
                    <FontAwesomeIcon icon={faInstagram} color=" white" />
                  </span>
                </Link>
                <Link className="proa" onClick={whts}>
                  <span className="prospan">
                    <FontAwesomeIcon icon={faWhatsapp} color=" white" />
                  </span>
                </Link>
                <Link className="proa" onClick={twit}>
                  <span className="prospan">
                    <FontAwesomeIcon icon={faTwitter} color=" white" />
                  </span>
                </Link>
                <Link className="proa" onClick={utube}>
                  <span className="prospan">
                    <FontAwesomeIcon icon={faYoutube} color=" white" />
                  </span>
                </Link>
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
              <Link className="addctas" onClick={locate}>
                <button className="addbtton">Locate us</button>
              </Link>
            </div>
          </div>
          <div className="rights boxs">
            <h2 className="quicks">Quick links</h2>
            <div className="cdntents">
              <ul className="rightsul">
                <li className="rightsli">
                  <Link className="rightsa" href="/">
                    Home
                  </Link>
                </li>
                <li className="rightsli">
                  <Link className="rightsa" to="/feedback">
                    Feedback
                  </Link>
                </li>
                <li className="rightsli">
                  <Link className="rightsa" to="/product">
                    Product
                  </Link>
                </li>
                <li className="rightsli">
                  <Link className="rightsa" to="/investors">
                    Investor
                  </Link>
                </li>
                <li className="rightsli">
                  <Link className="rightsa" to="/register">
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
export default Product;
