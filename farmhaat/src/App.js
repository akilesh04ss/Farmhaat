
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import About from './component/about/about'
// import Cart from './component/cart/cart'
import Home from './component/home/home'
// import Feedback from './component/feedback/feedback'
// import Login from './component/login/login'
import Register from './component/register/register'
// import Investors from './component/investors/investors'
// import Orderediterm from './component/ordered item/ordered item'
// import Viewdetails from './component/ordered item/view details'
// import Product from './component/product/product'
// import View from './component/product/view'

function App(){
  return(
    <Router >
    <>
    <Switch>
    <Route path="/About">
    {/* <About /> */}
    </Route>
    <Route path="/Cart">
    {/* <Cart /> */}
    </Route>
    <Route exact path ="/">
    <Home /> 
    </Route>
    <Route path ="/Investors">
    {/* <Investors /> */}
    </Route>
    <Route  path ="/Ordered-item">
    {/* <Orderediterm /> */}
    </Route>
    <Route path ="/View-details">
    {/* <Viewdetails /> */}
    </Route>
    <Route path ="/Product">
    {/* <Product /> */}
    </Route>
    <Route path ="/View-it">
    {/* <View /> */}
    </Route>
    <Route path ="/Login">
     {/* <Login /> */}
    </Route>
    <Route path ="/Feedback">
    {/* <Feedback /> */}
    </Route>
    <Route path ="/Register">
    {/* <Register /> */}
    </Route>
    </Switch>

</>
</Router>
)
}
export default App