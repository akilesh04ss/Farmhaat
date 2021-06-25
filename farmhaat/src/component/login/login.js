import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import bk from "../../assets/bk.gif";
function Login() {
  const [usr, setusr] = useState("");
  const [pass, setpass] = useState("");
  var arw2 = async () => {
    const arrayform2 = {
      Username: usr,
      Password: pass,
    };
    console.log(arrayform2);
    await axios.post("http://localhost:2000/farmhaat/login/", arrayform2);
    alert("login");
  };

  return (
    <div>
      <div className="logback">
        <img className="logback" src={bk} />
      </div>
      <form className="logbox">
        <h1 className="logh1">Login</h1>
        <input
          className="loginput"
          type="text"
          name=""
          placeholder="Username"
          onChange={(e) => setusr(e.target.value)}
        />
        <input
          className="loginput"
          type="password"
          name=""
          placeholder="Password"
          onChange={(e) => setpass(e.target.value)}
        />
        <p className="logsign">New user ?</p>
        <Link to="/register">
          <input className="loginput" type="button" value="Sign up" />
        </Link>
        <input
          className="loginput"
          type="Submit"
          name=""
          value="Login"
          onClick={arw2}
        />
      </form>
    </div>
  );
}

export default Login;
