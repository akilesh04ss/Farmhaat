import React from "react";
import "./feedback.css";
import axios from "axios";
import { useState } from "react";
function Feedback() {
  const [name, setname] = useState("");
  const [emails, setemails] = useState("");
  const [msg, setmsg] = useState("");
  var arrow1 = async () => {
    const arrayform2 = await {
      Name: name,
      Email: emails,
      Msg: msg,
    };
    console.log(arrayform2);
    await axios.post("http://localhost:2000/farmhaat/feedback/", arrayform2);
  };
  return (
    <div className="feedback">
      <div className="feedbk">
        <div className="feedcontainer">
          <div className="feedtext">Feedback Form</div>
          <form className="feedform" action="#">
            <div className="feedformrow">
              <div className="feedinputdata">
                <input
                  className="feedinput"
                  type="text"
                  required
                  onChange={(e) => setname(e.target.value)}
                />
                <div className="feedunderline"></div>
                <label className="feedlabel">Name*</label>
              </div>
            </div>
            <div className="feedformrow">
              <div className="feedinputdata">
                <input
                  className="feedinput"
                  type="text"
                  required
                  onChange={(e) => setemails(e.target.value)}
                />
                <div className="feedunderline"></div>
                <label className="feedlabel">Email id*</label>
              </div>
              <div className="feedinputdata">
                <input className="feedinput" type="text" required />
                <div className="feedunderline"></div>
                <label className="feedlabel">User id*</label>
              </div>
            </div>
            <div className="feedformrow ">
              <div className="feedindputdata feedtextarea">
                <textarea
                  className="feedtextareainp"
                  cols="30"
                  rows="10"
                  required
                  onChange={(e) => setmsg(e.target.value)}
                ></textarea>
                <div className="feedunderline"></div>
                <label className="feedlabel">Message*</label>
              </div>
            </div>
            <div className="feedformrow feedsubmitbtn">
              <div className="feedinputdata">
                <div className="feedinner"></div>
                <input
                  className="feedinput"
                  type="submit"
                  value="submit"
                  onClick={arrow1}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
