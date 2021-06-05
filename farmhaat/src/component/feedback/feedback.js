import React from "react";
import "./feedback.css";
function Feedback() {
  return (
    <div className="feedbk">
      <div className="feedcontainer">
        <div className="feedtext">Feedback Form</div>
        <form className="feedform" action="#">
          <div className="feedformrow">
            <div className="feedinputdata">
              <input className="feedinput" type="text" required />
              <div className="feedunderline"></div>
              <label className="feedlabel">Name*</label>
            </div>
          </div>
          <div className="feedformrow">
            <div className="feedinputdata">
              <input className="feedinput" type="email" required />
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
              ></textarea>
              <div className="feedunderline"></div>
              <label className="feedlabel">Message*</label>
            </div>
          </div>
          <div className="feedformrow feedsubmitbtn">
            <div className="feedinputdata">
              <div className="feedinner"></div>
              <input className="feedinput" type="submit" value="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
