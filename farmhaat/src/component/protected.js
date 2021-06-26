import React from "react";
import { Route, Redirect } from "react-router-dom";
import Product from "./product/product";

const Protected = ({ component, ...rest }) => {
  let Renderc = component;
  let hastoken = JSON.parse(localStorage.getItem("auth"));
  console.log(hastoken);
  return (
    <Route
      {...rest}
      render={(props) => {
        return hastoken !== null ? (
          <Renderc {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
};

export default Protected;
