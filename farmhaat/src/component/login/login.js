import React from "react";
import "./login.css";
import bk from "../../assets/bk.gif";

function Login() {
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
          placeholder="Username"
        />
        <input
          className="loginput"
          type="password"
          name=""
          placeholder="Password"
        />
        <p className="logsign">New user ?</p>
        <input className="loginput" type="button" value="Sign up" />
        <input className="loginput" type="Submit" name="" value="Login" />
      </form>
    </div>
  );
}

export default Login;
