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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router basename="/Farmhaat">
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
          <Route path="/investors" component={Investors} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/view/:name" component={View} />
          <Route path="/viewdetails/:_id" component={Viewdetails} />
          <Route path="/ordereditem" component={Ordereditem} />
          <Route path="/cart" component={Cart} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <ToastContainer />
        </Switch>
      </>
    </Router>
  );
}
export default App;
