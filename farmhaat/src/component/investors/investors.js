import React from "react";
import "./investors.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logonew.png";
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
import backy from "../../assets/organic.png";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Investors() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const cookies = new Cookies();
  var getcookie2 = cookies.get("user");
  var logouts = () => {
    cookies.set("login", "false");
    cookies.set("user", "User");
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
  var arrw = async () => {
    const arrayform1 = {
      Name: name,
      Email: email,
      Material: material,
      Wgt: weight,
      Description: description,
    };
    console.log(arrayform1);
    let invs = await axios.post(
      "http://localhost:2000/farmhaat/investor/",
      arrayform1
    );
    console.log(invs.data.err);
    if (invs.data.err == "good") {
      toast.success("Requested for the Pickup!!", 9000);
      toast.info(
        "Your request has been accepted and it will be picked up today!!",
        9000
      );
    }
  };

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [user, setuser] = useState("");
  const [weight, setweight] = useState("");
  const [material, setmaterial] = useState("");
  const [description, setdescription] = useState("");

  return (
    <div className="invbackground">
      <ToastContainer />
      {/* <img className="invimg2" src={backy} /> */}
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
            <Link className="invcta" to="/" onClick={logouts}>
              <button className="invbutton1">Log out</button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="invcontainer">
        <div className="invtext">Request Form</div>
        <form action="#" className="invform">
          <div className="invformrow">
            <div className="invinputdata invname">
              <input
                className="invinput "
                type="text"
                required
                onChange={(e) => setname(e.target.value)}
              />
              <div className="invunderline"></div>
              <label className="invlabel">Name*</label>
            </div>
          </div>
          <div className="invformrow">
            <div className="invinputdata">
              <input
                className="invinput"
                type="email"
                required
                onChange={(e) => setemail(e.target.value)}
              />
              <div className="invunderline"></div>
              <label className="invlabel">Email id*</label>
            </div>
            <div className="invinputdata">
              <input
                className="invinput"
                type="text"
                required
                onChange={(e) => setuser(e.target.value)}
              />
              <div className="invunderline"></div>
              <label className="invlabel">User Name*</label>
            </div>
          </div>
          <div className="invformrow">
            <div className="invinputdata">
              <input
                className="invinput"
                onChange={(e) => setmaterial(e.target.value)}
                type="text"
                required
              />
              <div className="invunderline"></div>
              <label className="invlabel">Material*</label>
            </div>
            <div className="invinputdata">
              <input
                className="invinput"
                onChange={(e) => setweight(e.target.value)}
                type="text"
                required
              />
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
                onChange={(e) => setdescription(e.target.value)}
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
                onClick={arrw}
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
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akilesh04.ss@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="invmail">
                    &nbsp;&nbsp;contact.farmhaat@gmail.com
                  </span>
                </a>
              </div>
              <div className="invsocial">
                <a
                  className="invaleft"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </a>
                <Link className="invaleft" onClick={instafn}>
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </Link>
                <Link className="invaleft" onClick={whts}>
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </Link>
                <Link className="invaleft" onClick={twit}>
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </Link>
                <Link className="invaleft" onClick={utube}>
                  <span className="invspanleft">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </Link>
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
              <Link className="invctas" onClick={locate}>
                <button className="invbutton3">Locate us</button>
              </Link>
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
