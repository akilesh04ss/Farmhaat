import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/about/about";
import Cart from "./component/cart/cart";
import Home from "./component/home/home";
import Feedback from "./component/feedback/feedback";
import Login from "./component/login/login";
import Register from "./component/register/register";
import Investors from "./component/investors/investors";
import Ordereditem from "./component/ordered item/ordereditem";
import Viewdetails from "./component/ordered item/viewdetails";
import View from "./component/product/view";
import Product from "./component/product/product";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/investors">
            <Investors />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/view">
            <View />
          </Route>
          <Route path="/viewdetails">
            <Viewdetails />
          </Route>
          <Route path="/ordereditem">
            <Ordereditem />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
export default App;
