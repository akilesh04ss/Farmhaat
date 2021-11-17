import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logonew.png";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./admin.css";
import graph from "../../assets/Dashboard Visualizations_ Pie Chart.gif";
import axios from "axios";
function Admin() {
  const cookies = new Cookies();
  const [search, setsearch] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  var logouts = () => {
    cookies.set("login", "false");
    cookies.set("user", "User");
  };
  var getcookie = cookies.get("user");
  const [id, setid] = useState(" ");
  const [arrowget1, setarrowget1] = useState([]);
  useEffect(async () => {
    var getarray = await axios.get("http://localhost:2000/farmhaat/order");
    var filtere = getarray.data;
    console.log("filtere", filtere);
    setarrowget1(filtere);
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

  var itt = arrowget1.filter((it) => it.Name == search);
  var lent = arrowget1.length;
  console.log("itt", itt);
  var items1;
  var show = [];
  let k = -1;
  for (let j = lent; j <= lent && j >= lent - 5; j--) {
    console.log(arrowget1[j]);
    items1 = arrowget1[j];
    show[(k += 1)] = items1;
  }
  show.splice(0, 1);
  console.log(show, "items12", k);
  let itemss = itt.length == 0 ? arrowget1 : itt;
  let i = 0;
  var posti = itemss.map((get) => (
    <tr>
      <td className="admtd .admsn">{(i = i + 1)}</td>
      <td className="admtd admdate">
        {get.Order.slice(0, 10).split("-").reverse().join("-")}
      </td>
      <td className="admtd">{get.Name}</td>
      <td className="admtd">{get.Quantity}</td>
      <td className="admtd">{get.Quantity * get.Price}</td>
    </tr>
  ));

  var postii = itemss.map((get) => (
    <tr>
      <td className="admtd">{(i = i + 1)}</td>
      <td className="admtd admdate">
        {get.Order.slice(0, 10).split("-").reverse().join("-")}
      </td>
      <td className="admtda">{get.Name}</td>
      <td className="admts">{get.Quantity}</td>
      <td className="admtd">{get.Quantity * get.Price}</td>
    </tr>
  ));
  return (
    <div className="admin">
      <div className="admhead">
        <div className="admheader">
          <div className="admljs">
            <img className="admlogo" src={logo} alt="logo" width="80px" />
          </div>
          <nav>
            <ul className="admlin">
              <li className="admli">
                <Link className="admoce" to="/">
                  Home
                </Link>
              </li>
              <li className="admli">
                <Link className="admo" to="/product">
                  Products
                </Link>
              </li>
              <li className="admli">
                <Link className="admco" to="/investors">
                  Investors
                </Link>
              </li>
              <li className="admli">
                <Link className="admoc" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link className="admcta" to="/" onClick={logouts}>
              <button className="abtbutton1">Log out</button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="admcontainer">
        <div className="admdesbox"></div>
        <h3 className="admtotalord">Total orders: {id}</h3>
        <h3 className="admtotalord">New orders: {id - 12}</h3>
        <h3 className="admtotalord">Delivered orders: {id - 8}</h3>
        <h3 className="admtotalord">Total Pick-ups: {id + 2}</h3>
        <h3 className="admtotalord">New Pick-ups: {id + 6}</h3>
        <h3 className="admtotalord">Price(waste(Rs)/Kg): 20</h3>
        <img src={graph} className="graph" width="400px" />

        <table className="admtable">
          <input
            placeholder="search"
            onChange={(e) => setsearch(e.target.value)}
          />
          <tr>
            <th className="admsno">S.No.</th>
            <th className="admtds">Date</th>
            <th className="admit">Item</th>
            <th className="admquan">Quantity</th>
            <th className="admpr">Price</th>
          </tr>
          {posti}
        </table>
      </div>
      <div className="pie">
        <h2 className="custo">
          <span className="span1">Old and New </span>customer's Ratings:
        </h2>
        <div className="line1"></div>
        <div className="exp1">
          {" "}
          This graph depicts the rating of the old and new customers.
        </div>
        <iframe
          className="cust"
          width="600"
          height="371"
          seamless
          frameborder="0"
          scrolling="no"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQQJ8eFaA9IuO03POHm82dawDw-bwFEQSncHndNuwNcRXvt04Zd9h1aZhciEG-Wpba9aBuoAqq2ww4d/pubchart?oid=1163273983&amp;format=interactive"
        ></iframe>

        <div className="dough">
          <h2 className="dough1">
            <span className="span2">Product </span>and its Rating:
          </h2>
          <div className="line2"></div>
          <div className="exp2">
            {" "}
            This graph depicts the product and its rating give by the customer.
          </div>
          <iframe
            className="doughim"
            width="600"
            height="371"
            seamless
            frameborder="0"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQQJ8eFaA9IuO03POHm82dawDw-bwFEQSncHndNuwNcRXvt04Zd9h1aZhciEG-Wpba9aBuoAqq2ww4d/pubchart?oid=528184988&amp;format=interactive"
          ></iframe>
        </div>
        <div className="col">
          <h2 className="col1">
            <span className="span3">Count </span>of the purchased product:
          </h2>
          <div className="line3"></div>
          <div className="exp3">
            {" "}
            This graph depicts the count of the purchased product.
          </div>
          <iframe
            className="colim"
            width="600"
            height="371"
            seamless
            frameborder="0"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQQJ8eFaA9IuO03POHm82dawDw-bwFEQSncHndNuwNcRXvt04Zd9h1aZhciEG-Wpba9aBuoAqq2ww4d/pubchart?oid=539914073&amp;format=interactive"
          ></iframe>
        </div>
      </div>
      <div className="admfooter">
        <div className="admmaincontent">
          <div className="admleft abtbox">
            <h2 className="admcontact">Contact us</h2>
            <div className="admcontent">
              <div className="admphone">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <span className="admpho">0421-123456</span>
                <span className="admcheck">8190029732</span>
              </div>
              <br></br>
              <div className="admemail">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akilesh04.ss@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="admmail">contact.farmhaat@gmail.com</span>
                </a>
              </div>
              <div className="admsocial">
                <Link className="admsociala" onClick={fbclick}>
                  <span className="admsocialspan">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </Link>
                <Link className="admsociala" onClick={instafn}>
                  <span className="admsocialspan">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </Link>
                <Link className="admsociala" onClick={whts}>
                  <span className="admsocialspan">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </Link>
                <Link className="admsociala" onClick={twit}>
                  <span className="admsocialspan">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </Link>
                <Link className="admsociala" onClick={utube}>
                  <span className="admsocialspan">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="admcenter admbox">
            <h2 className="admaddress">Address</h2>
            <div className="admcontent">
              <div className="admplace">
                <span>
                  <FontAwesomeIcon icon={faStreetView} />
                </span>
                <span className="admText">
                  &nbsp;&nbsp;2/827, Vellagoundan Thottam,
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ganapathipalayam, <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tirupur -641605
                </span>
              </div>
              <Link onClick={locate} className="admctas">
                <button className="admbutton2">Locate us</button>
              </Link>
            </div>
          </div>
          <div className="admright admbox">
            <h2 className="admquick">Quick links</h2>
            <div className="admcontents">
              <ul className="admrightul">
                <li className="admrightli">
                  <Link className="admrighta" to="/">
                    Home
                  </Link>
                </li>
                <li className="admrightli">
                  <Link className="admrighta" to="/feedback">
                    Feedback
                  </Link>
                </li>
                <li className="admrightli">
                  <Link className="admrighta" to="/product">
                    Product
                  </Link>
                </li>
                <li className="admrightli">
                  <Link className="admrighta" to="/investors">
                    Investor
                  </Link>
                </li>
                <li className="admrightli">
                  <Link className="admrighta" to="/register">
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

export default Admin;
