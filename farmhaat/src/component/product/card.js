import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  var { name } = props.item;
  return (
    <div className="procheck">
      <div className="cdntainer">
        <div className="csrd">
          <div className="imgdBx">
            <div className="coirs">
              <img src={props.item.img} alt="coir brick" />
            </div>
          </div>
          <div className="contentdBx">
            <h2 className="h2">{name}</h2>
            <div className="pricesd">
              <h3 className="h3">Price(Rs/kg) :</h3>
              <span className="span">{props.item.price}</span>
            </div>
            <Link className="tiv" to={`/view/:${name}`}>
              View it!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
