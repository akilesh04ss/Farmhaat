import React from "react";
import "./login.css";
import bk from "../../../assets/bk.gif";

function Loginch() {
  return (
    <div>
      <div className="logback">
        <img className="logback" src={bk} />
      </div>
      <form className="logbox" action="" method="POST">
        <h1 className="logh1">Login</h1>
        <input
          className="loginput"
          type="text"
          name=""
          value=""
          placeholder="Username"
        />
        <input
          className="loginput"
          type="password"
          name=""
          value=""
          placeholder="Password"
        />
        <p className="logsign">New user ?</p>
        <input
          className="loginput"
          type="button"
          value="Sign up"
          onclick="window.location='./register.html'"
        />
        <input className="loginput" type="Submit" name="" value="Login" />
      </form>
    </div>
  );
}

export default Loginch;
