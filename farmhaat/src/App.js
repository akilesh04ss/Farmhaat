import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutch from "./component/about/checkin/aboutch";
import Cartch from "./component/cart/checks/cartch";
import Home from "./component/home/home";
import Feedbackch from "./component/feedback/checking/feedbackch";
import Loginch from "./component/login/checkinh/loginch";
import Registerch from "./component/register/checkim/registerch";
import Investorsch from "./component/investors/checkin/investorsch";
import Ordereditemch from "./component/ordered item/check/ordereditemch";
import Viewdetailsch from "./component/ordered item/check/viewdetailsch";
// import Product from './component/product/product'
// import View from './component/product/view'
// import Chh from './component/home/chh'
import Viewch from ".//component/product/checks/viewch";
import Productch from "./component/product/checks/productch";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Aboutch />
          </Route>
          <Route path="/product">
            <Productch />
          </Route>
          <Route path="/investors">
            <Investorsch />
          </Route>
          <Route path="/feedback">
            <Feedbackch />
          </Route>
          <Route path="/view">
            <Viewch />
          </Route>
          <Route path="/viewdetails">
            <Viewdetailsch />
          </Route>
          <Route path="/ordereditem">
            <Ordereditemch />
          </Route>
          <Route path="/cart">
            <Cartch />
          </Route>
          <Route path="/register">
            <Registerch />
          </Route>
          <Route path="/login">
            <Loginch />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
export default App;
