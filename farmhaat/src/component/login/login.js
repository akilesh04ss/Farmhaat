import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import bk from "../../assets/bk.gif";
import Cookies from "universal-cookie";
function Login(props) {
  const cookies = new Cookies();
  const [usr, setusr] = useState("");
  const [pass, setpass] = useState("");
  const [Login, setLogin] = useState(false);
  cookies.set("login", "false");
  cookies.set("user", "User");
  var arw2 = async (e) => {
    e.preventDefault();
    const arrayform2 = {
      Username: usr,
      Password: pass,
    };
    console.log(arrayform2);
    let Data = await axios.post(
      "http://localhost:2000/farmhaat/login",
      arrayform2
    );
    if (Data.data.err == "Username Not Exists") {
      alert("Username not exists");
    }
    if (Data.data.err == "Password Incorrect") {
      alert("Password Incorrect");
      console.log(Data.data.err);
    }
    if (Data.data.err == null) {
      alert("FARMHAAT, Welcomes you!!!");
      console.log(Data.data.err);
    }
    console.log(Data.data.err);
    console.log(Data);
    if (Data.status == 204) {
      setLogin(true);
      cookies.set("user", usr);
      cookies.set("login", "true");
      window.open("http://localhost:3000/Farmhaat/", "_self");
    }
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
