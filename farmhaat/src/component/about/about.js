import React from "react";
import "./about.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logonew.png";
import mis from "../../assets/grow1.png";
import vis from "../../assets/prepare1.png";
import plant from "../../assets/plant.gif";
import seed from "../../assets/seed.svg";
import cog from "../../assets/cog.svg";
import check from "../../assets/check.svg";
import thumb from "../../assets/thumb.svg";
import coin from "../../assets/coins.svg";
import recycle from "../../assets/recycle.svg";
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

function About() {
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
  return (
    <div className="abtbackground">
      <div className="abthead">
        <div className="abtheader">
          <div className="abtlj">
            <img className="abtlogo" src={logo} alt="logo" width="80px" />
          </div>
          <nav>
            <ul className="abtlin">
              <li className="abtli">
                <Link className="abtoce" to="/">
                  Home
                </Link>
              </li>
              <li className="abtli">
                <Link className="abto" to="/product">
                  Products
                </Link>
              </li>
              <li className="abtli">
                <Link className="abtco" to="/investors">
                  Investors
                </Link>
              </li>
              <li className="abtli">
                <Link className="abtoc" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link className="abtcta" to="/feedback">
              <button className="abtbutton1">Log out</button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="abtour">
        <p className="abtcont">Profile</p>
        <div>
          <img src={mis} alt="Mision" className="abtmis" />
          <p className="abtmisi">MISSION</p>
          <p className="abtenter">
            To provide 100% pure and organic products and to make the consumer
            satisfied. To be a globally competitive producer.
          </p>
        </div>
        <div>
          <img src={vis} alt="Vision" className="abtvis" />
          <p className="abtvisi">VISION</p>
          <p className="abtventer">
            To expand the company and setup branches allover the parts of world.
            To handle al knds of waste in an effective way with 0% wastage.
          </p>
        </div>
        <div className="abtprofile">
          <p>
            Our organization was set up to provide objective information about
            the use of wastes for the benefit of the environment. We are the
            notable Organic manure Supplier and Manufacturers. We are engaged in
            manufacturing, supplying, wholesaling and exporting quality assured
            range of Organic manure. The fertilizers are ideal for soil
            improvement, optimizing crop yields and making plants healthier in
            an eco-friendly manner while reducing the use of any chemical
            fertilizer. Our company's main principle is proper waste disposal.We
            collect the wastes directly from the farms. We use that wastes to
            produce manures,Coir bricks,compost,etc...
          </p>
          <br></br>
          <p>
            Our products are accessible with an assurance of the best quality
            and standards as per fertilizer control and are widely used for all
            crops for agriculture, horticulture, plantation crops, nurseries,
            fruits and vegetables. We are able to deliver our products in bulk
            and small quantities, right within the specified time frame.Organic
            manure has become a wide component of agri-business models across
            the country with very low initial investment and we are the best
            Organic manure producers. The company is backed by the advanced
            manufacturing unit, which is spread over an area of 5 acres. Our
            infrastructure comprises of a well equipped Processing unit and a
            spacious Warehousing facility. To ensure that our products are rich
            in quality and effective, the qualified team supervises the entire
            production, testing, and packaging processes.
          </p>
        </div>
        <div>
          <img className="abtimge" src={plant} alt="" />
        </div>
      </div>
      <div className="abticon">
        <a className="abtorg">
          <img src={seed} />
        </a>
        <p className="abtorganic">100% Organic</p>
        <p className="abtproo">Organic products</p>
        <a href="#" className="abtser">
          <img src={cog} />
        </a>
        <p className="abtvice">Service</p>
        <p className="abtbes">We give best service</p>
        <a href="#" className="abtcl">
          <img src={check} width="70px" />
        </a>
        <p className="abtqual">Quality</p>
        <p className="abtity"> 100% Quality check</p>
        <a href="#" className="abtthumb">
          <img src={thumb} />
        </a>
        <p className="abtprod">Product</p>
        <p className="abtgood">Good and Certified products</p>
        <a className="abtcoin">
          <img src={coin} />
        </a>
        <p className="abtprice">Reasonable Price</p>
        <p className="abtreason">Consistent quality and price</p>
        <a href="#" className="abtre">
          <img src={recycle} />
        </a>
        <p className="abtcycle">Waste Recycling</p>
        <p className="abtbest">Best handling of wastes</p>
      </div>
      <div className="abtfooter">
        <div className="abtmaincontent">
          <div className="abtleft abtbox">
            <h2 className="abtcontact">Contact us</h2>
            <div className="abtcontent">
              <div className="abtphone">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <span className="abtpho">
                  &nbsp; 0421 123456 &nbsp;+91 8190029732
                </span>
              </div>
              <br></br>
              <div className="abtemail">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="abtmail">
                  &nbsp;&nbsp;contact.farmhaat@gmail.com
                </span>
              </div>
              <div className="abtsocial">
                <Link className="abtsociala" onClick={fbclick}>
                  <span className="abtsocialspan">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </Link>
                <Link className="abtsociala" onClick={instafn}>
                  <span className="abtsocialspan">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </Link>
                <Link className="abtsociala" onClick={whts}>
                  <span className="abtsocialspan">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </Link>
                <Link className="abtsociala" onClick={twit}>
                  <span className="abtsocialspan">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </Link>
                <Link className="abtsociala" onClick={utube}>
                  <span className="abtsocialspan">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="abtcenter abtbox">
            <h2 className="abtaddress">Address</h2>
            <div className="abtcontent">
              <div className="abtplace">
                <span>
                  <FontAwesomeIcon icon={faStreetView} />
                </span>
                <span className="abtText">
                  &nbsp;&nbsp;2/827, Vellagoundan Thottam,
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ganapathipalayam, <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tirupur -641605
                </span>
              </div>
              <Link onClick={locate} className="abtctas">
                <button className="abtbutton2">Locate us</button>
              </Link>
            </div>
          </div>
          <div className="abtright abtbox">
            <h2 className="abtquick">Quick links</h2>
            <div className="abtcontents">
              <ul className="abtrightul">
                <li className="abtrightli">
                  <Link className="abtrighta" to="/">
                    Home
                  </Link>
                </li>
                <li className="abtrightli">
                  <Link className="abtrighta" to="/feedback">
                    Feedback
                  </Link>
                </li>
                <li className="abtrightli">
                  <Link className="abtrighta" to="/product">
                    Product
                  </Link>
                </li>
                <li className="abtrightli">
                  <Link className="abtrighta" to="/investors">
                    Investor
                  </Link>
                </li>
                <li className="abtrightli">
                  <Link className="abtrighta" to="/register">
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

export default About;
