import React from "react";
import "./view.css";
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
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function View(props) {
  var id = props.match.params.name;
  var nameid = id.slice(1);
  console.log(nameid);
  var productitems = [
    {
      name: "Coir Brick",
      price: "200",
      img: coir,
      des1: "It will come in powder form of 1 KG.",
      des2: "Useful for potting mix, maintain water level.",
      des3: "Put directly into the water to convert it into powder form.",
      des4: "Useful for indoor & outdoor potted plants.",
    },
    {
      name: "Coco peat",
      price: "99",
      img: peat,
      des1: "It will come in brick form of 5 KG.",
      des2: "Useful for potting mix, maintain water level.",
      des3: "Put directly into the water to convert it into powder form.",
      des4: "Useful for indoor & outdoor potted plants.",
    },
    {
      name: "Soil Mix",
      price: "499",
      img: mix,
      des1: " Mix of Vermicompost, coco soil, neem cake.",
      des2: "Quantity: 5Kg Soil Mix",
      des3: "Useful as a fertilizer for every type of plants.",
      des4: "Useful as potting media.",
    },
    {
      name: "Vermicompost",
      price: "192",
      img: comp,
      des1: "1 Kg Packet of Vermicompost",
      des2: "Useful for all types of garden plants.",
      des3: "Directly apply on potted plants.",
      des4: "Repeat fertilizers between 30 to 45 days.",
    },
    {
      name: "Hydro clay balls",
      price: "700",
      img: hydro,
      des1: "Combine it with any plant solutions and foundation need for garden.",
      des2: " Easy for harvest and transplantation.",
      des3: "Help to keep insects and bacteria away from the plant during growth.",
      des4: "It helps to drain excess water.",
    },
    {
      name: "Moist clay balls ",
      price: "450",
      img: moist,
      des1: "1 Kg 16mm Moist ball.",
      des2: "Easy for harvest and transplantation.",
      des3: "Help to keep insects and bacteria away from the plant during growth.",
      des4: "It helps to drain excess water.",
    },
    {
      name: "Coco chips",
      price: "199",
      img: chip,
      des1: "Its a package of 1Kg.",
      des2: "Improves the soil fertility and water absorption",
      des3: "Put a layer of this chips in between the soil layers.",
      des4: "Useful for indoor & outdoor potted plants.",
    },
    {
      name: "Coir Disc",
      price: "450",
      img: disc,
      des1: "Improves the water holding capacity.",
      des2: "This pack contains 500g of coir discs in a packet.",
      des3: "Apply this in between the soil.",
      des4: "Useful for indoor & outdoor potted plants.",
    },
    {
      name: "Cow Manure",
      price: "330",
      img: manure,
      des1: "Useful as a fertilizer for every type of plants.",
      des2: "1kg packet.",
      des3: "Prepared only from cow dung.",
      des4: "Improves the strength of the plant.",
    },
    {
      name: "Coir soil",
      price: "217",
      img: soil,
      des1: "Enriches the water content.",
      des2: "1kg packet.",
      des3: "Mix with the soil before plantng.",
      des4: "Useful for indoor & outdoor potted plants.",
    },
    {
      name: "Coir Mesh",
      price: "950",
      img: mesh,
      des1: "10Nos",
      des2: "spread over the top layer of the soil.",
      des3: "Decreases water evaporation.",
      des4: "Useful for indoor & outdoor potted plants.",
    },
    {
      name: "Special organic manure mixture",
      price: "550",
      img: spl,
      des1: "Useful as a fertilizer for every type of plants.",
      des2: "Special manure prepared out of orgaic wastes (like kitchen wastes), 1kg packet.",
      des3: "Improves the nutrirnt content",
      des4: "Useful for indoor & outdoor potted plants.",
    },
  ];
  var viewitem = productitems.filter((aa) => aa.name === nameid);
  console.log("viewitems", viewitem);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  var arrow = async () => {
    const arraycart = {
      Name: viewitem[0].name,
      Image: viewitem[0].img,
      Quantity: count,
      Price: viewitem[0].price,
      des1: viewitem[0].des1,
      des2: viewitem[0].des2,
      des3: viewitem[0].des3,
      des4: viewitem[0].des4,
    };
    console.log(arraycart);
    await axios.post("http://localhost:2000/farmhaat/cart/", arraycart);
  };

  const [count, setCount] = useState(1);
  var minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
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
    <div className="viewchdiv">
      <div className="viewhead">
        <div className="headerview">
          <div className="viewlj">
            <img className="viewlogo" src={logo} alt="logo" width="80px" />
          </div>
          <nav>
            <ul className="viewlin">
              <li className="viewli">
                <Link class="viewoce" to="/">
                  Home
                </Link>
              </li>
              <li className="viewli">
                <Link class="viewoc" to="/product">
                  Products
                </Link>
              </li>
              <li className="viewli">
                <Link class="viewco" to="/investors">
                  Investors
                </Link>
              </li>
              <li className="viewli">
                <Link class="viewo" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link className="viewcta" to="/feedback">
              <button className="viewbutton1">Log out</button>
            </Link>
          </nav>
        </div>
      </div>
      <div className="viewcon">
        <table className="viewtable">
          <tr className="viewtr">
            <td className="viewtd">
              <img className="viewimg" src={viewitem[0].img} alt="" />
              <div className="viewinf">
                <h1 className="viewoin">{viewitem[0].name}</h1>
                <small className="viewpt">
                  Price(Rs/Kg): {viewitem[0].price}
                </small>
                <br></br>
                <p className="viewqt">Quantity(kg) :</p>
                <button
                  className="viewplus"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <input
                  className="viewinput"
                  type="number"
                  value={count}
                  max="2"
                />
                <button className="viewminus" onClick={minus}>
                  -
                </button>
              </div>
            </td>
          </tr>

          <tr className="viewtr">
            <p class="viewsa">
              <a className="viewop">Description:</a>
              <br></br>* {viewitem[0].des1} <br></br>* {viewitem[0].des2}
              <br></br>* {viewitem[0].des3}
              <br></br>* {viewitem[0].des4}
            </p>
          </tr>
          <tr className="viewtr">
            <button class="viewbtnss" onClick={arrow}>
              ADD TO CART
            </button>
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
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akilesh04.ss@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span className="viewmail">
                    &nbsp;&nbsp;contact.farmhaat@gmail.com
                  </span>
                </a>
              </div>
              <div className="viewsocial">
                <Link onClick={fbclick} className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faFacebook} color="white" />
                  </span>
                </Link>
                <Link onClick={instafn} className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </span>
                </Link>
                <Link onClick={whts} className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                  </span>
                </Link>
                <Link onClick={twit} className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </span>
                </Link>
                <Link onClick={utube} className="viewasoc">
                  <span className="viewspansoc">
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                  </span>
                </Link>
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
              <Link className="viewctas" onClick={locate}>
                <button className="viewbutton2">Locate us</button>
              </Link>
            </div>
          </div>
          <div className="viewright viewbox">
            <h2 className="viewquick">Quick links</h2>
            <div className="viewcontents">
              <ul className="viewulright">
                <li className="viewliright">
                  <Link classname="vieright" to="/">
                    Home
                  </Link>
                </li>
                <li className="viewliright">
                  <Link classname="vieright" to="/feedback">
                    Feedback
                  </Link>
                </li>
                <li className="viewliright">
                  <Link classname="vieright" to="/product">
                    Product
                  </Link>
                </li>
                <li className="viewliright">
                  <Link classname="vieright" to="/investors">
                    Investor
                  </Link>
                </li>
                <li className="viewliright">
                  <Link classname="vieright" to="/register">
                    Register
                  </Link>
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

export default View;
