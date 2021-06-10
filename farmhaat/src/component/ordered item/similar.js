import React from "react";
import { Link } from "react-router-dom";

function Similar(props) {
  return (
    <div className="simitemas">
      <div className="oricontainerc">
        <div className="oricard">
          <div className="oriimgBx">
            <img className="oriimage" src={props.item.img} alt="coir brick" />
          </div>
          <div className="oricontentBx">
            <h2 className="orih22">{props.item.name}</h2>
            <Link to={props.item.path} className="oriaw">
              view it!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Similar;
