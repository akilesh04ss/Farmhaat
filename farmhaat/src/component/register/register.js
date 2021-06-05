import React from "react";
import "./register.css";
import plant from "../../assets/img.gif";
function Register() {
  return (
    <div className="regbk">
      <div className="regcontainer">
        <div className="regform">
          <div className="regheading">
            <h1 className="regh1">Registration Form</h1>
          </div>
          <div className="regwrap">
            <div className="regf1">
              <label className="reglabel">First Name*</label>
              <input className="reginput" type="text" required />
              <span className="regfocusinput"></span>
            </div>
            <div class="regf2">
              <label className="reglabel">Second Name*</label>
              <input className="reginput" type="text" required />
              <span className="regfocusinput"></span>
            </div>
          </div>
          <div className="regwrap2">
            <label className="reglabel">Username*</label>
            <input className="reginput" type="text" required />
            <span className="regfocusinput2"></span>
          </div>
          <div className="regwrap">
            <div className="regf1">
              <label className="reglabel">E-mail*</label>
              <input className="reginput" type="email" required />
              <span className="regfocusinput"></span>
            </div>
            <div className="regf2">
              <label className="reglabel">Phone*</label>
              <input className="reginput" type="text" required />
              <span className="regfocusinput"></span>
            </div>
          </div>
          <div className="regwrap2">
            <label className="reglabel">Address*</label>
            <input className="reginput" type="text" required />
            <span className="regfocusinput2"></span>
          </div>
          <div className="regwrap2">
            <label className="reglabel">Password*</label>
            <input className="reginput" type="password" required />
            <span className="regfocusinput2"></span>
          </div>
          <div className="regwrap2">
            <label className="reglabel">Confirm password*</label>
            <input className="reginput" type="password" required />
            <span className="regfocusinput2"></span>
          </div>
          <button className="regbtn">Register</button>
        </div>
        <div className="regimage">
          <img className="regimg" src={plant} alt="imge" />
        </div>
      </div>
    </div>
  );
}

export default Register;
