const { response } = require("express");
const express = require("express");
const router = express.Router();
const register = require("./registerschema");
const login = require("./loginschema");
const investor = require("./investorschema");
const feedback = require("./feedbackschema");
const cart = require("./cartschema");
const order = require("./orderschema");
const { findById } = require("./registerschema");
router.get("/", async (req, res) => {
  var registerform = await register.find();
  res.status(200).json(registerform);
});
router.post("/", async (req, res) => {
  console.log(req.body);
  var registerform = await register.create({
    Fname: req.body.Fname,
    Sname: req.body.Sname,
    Email: req.body.Email,
    Phone: req.body.Phone,
    Address: req.body.Address,
    Password: req.body.Password,
    Username: req.body.Username,
    Confirmpass: req.body.Confirmpass,
  });
  res.status(200).json(registerform);
});
router.get("/login", async (req, res) => {
  var loginform = await login.find();
  res.status(200).json(loginform);
});
router.post("/login", async (req, res) => {
  console.log(req.body);
  var loginform = await login.create({
    Username: req.body.Username,
    Password: req.body.Password,
  });
  res.status(200).json(loginform);
});
router.get("/investor", async (req, res) => {
  var investorform = await investor.find();
  res.status(200).json(investorform);
});
router.post("/investor", async (req, res) => {
  console.log(req.body);
  var investorform = await investor.create({
    Name: req.body.Name,
    Email: req.body.Email,
    // Kilograms = req.body. Kilograms,
    Material: req.body.Material,
    Description: req.body.Description,
    Wgt: req.body.Wgt,
  });
  res.status(200).json(investorform);
  console.log(req.body);
});
router.get("/feedback", async (req, res) => {
  var feedbackform = await feedback.find();
  res.status(200).json(feedbackform);
});
router.post("/feedback", async (req, res) => {
  console.log(req.body);
  var feedbackform = await feedback.create({
    Name: req.body.Name,
    Email: req.body.Email,
    Msg: req.body.Msg,
    Contact: req.body,
  });
  res.status(200).json(feedbackform);
});
router.get("/cart", async (req, res) => {
  var cartform = await cart.find();
  res.status(200).json(cartform);
});

router.post("/cart", async (req, res) => {
  var cartform = await cart.create({
    Name: req.body.Name,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
    Image: req.body.Image,
    des1: req.body.des1,
    des2: req.body.des2,
    des3: req.body.des3,
    des4: req.body.des4,
  });
  res.status(200).json(cartform);
  console.log("abcc");
  console.log(req.body);
});
router.get("/order", async (req, res) => {
  var orderform = await order.find();
  res.status(200).json(orderform);
});
router.post("/order", async (req, res) => {
  var orderform = await order.create({
    Name: req.body.Name,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
    Delivery: req.body.Delivery,
    Image: req.body.Image,
    des1: req.body.des1,
    des2: req.body.des2,
    des3: req.body.des3,
    des4: req.body.des4,
  });
  // console.log(req.body);
  res.status(200).json(orderform);
});
module.exports = router;
