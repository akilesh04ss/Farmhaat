import React from "react";
import "./register.css";
import plant from "../../assets/img.gif";
import { useEffect, useState } from "react";
import axios from "axios";
function Register() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  var arrw3 = async () => {
    const arrayform3 = {
      Fname: name2,
      Sname: name1,
      Email: email1,
      Phone: phone1,
      Address: address1,
      Username: usr1,
      Password: pass2,
      Confirmpass: pass1,
    };
    console.log(arrayform3);
    await axios.post("http://localhost:2000/farmhaat/", arrayform3);
  };
  const [usr1, setusr1] = useState("");
  const [name2, setname2] = useState("");
  const [name1, setname1] = useState("");
  const [email1, setemail1] = useState("");
  const [phone1, setphone1] = useState("");
  const [address1, setaddress1] = useState("");
  const [pass2, setpass2] = useState("");
  const [pass1, setpass1] = useState("");
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
              <input
                className="reginput"
                type="text"
                required
                onChange={(e) => setname2(e.target.value)}
              />
              <span className="regfocusinput"></span>
            </div>
            <div class="regf2">
              <label className="reglabel">Second Name*</label>
              <input
                className="reginput"
                type="text"
                required
                onChange={(e) => setname1(e.target.value)}
              />
              <span className="regfocusinput"></span>
            </div>
          </div>
          <div className="regwrap2">
            <label className="reglabel">Username*</label>
            <input
              className="reginput"
              type="text"
              required
              onChange={(e) => setusr1(e.target.value)}
            />
            <span className="regfocusinput2"></span>
          </div>
          <div className="regwrap">
            <div className="regf1">
              <label className="reglabel">E-mail*</label>
              <input
                className="reginput"
                type="email"
                required
                onChange={(e) => setemail1(e.target.value)}
              />
              <span className="regfocusinput"></span>
            </div>
            <div className="regf2">
              <label className="reglabel">Phone*</label>
              <input
                className="reginput"
                type="text"
                required
                onChange={(e) => setphone1(e.target.value)}
              />
              <span className="regfocusinput"></span>
            </div>
          </div>
          <div className="regwrap2">
            <label className="reglabel">Address*</label>
            <input
              className="reginput"
              type="text"
              required
              onChange={(e) => setaddress1(e.target.value)}
            />
            <span className="regfocusinput2"></span>
          </div>
          <div className="regwrap2">
            <label className="reglabel">Password*</label>
            <input
              className="reginput"
              type="password"
              required
              onChange={(e) => setpass2(e.target.value)}
            />
            <span className="regfocusinput2"></span>
          </div>
          <div className="regwrap2">
            <label className="reglabel">Confirm password*</label>
            <input
              className="reginput"
              type="password"
              required
              onChange={(e) => setpass1(e.target.value)}
            />
            <span className="regfocusinput2"></span>
          </div>
          <button className="regbtn" onClick={arrw3}>
            Register
          </button>
        </div>
        <div className="regimage">
          <img className="regimg" src={plant} alt="imge" />
        </div>
      </div>
    </div>
  );
}

export default Register;
