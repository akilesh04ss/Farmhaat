const express = require("express");
const router = express.Router();
const register = require("./registerschema");
const login = require("./loginschema");
const investor = require("./investorschema");
const feedback = require("./feedbackschema");
const cart = require("./cartschema");
const order = require("./orderschema");
const bcrypt = require("bcrypt");
const { json } = require("express");
router.get("/register", async (req, res) => {
  var registerform = await register.find();
  res.status(200).json(registerform);
});
router.post("/register", async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt();
  const hash1 = await bcrypt.hash(req.body.Password, salt);
  var registerform = await register.create({
    Fname: req.body.Fname,
    Sname: req.body.Sname,
    Email: req.body.Email,
    Phone: req.body.Phone,
    Address: req.body.Address,
    Password: hash1,
    Username: req.body.Username,
    Confirmpass: hash1,
  });
  res.status(200).json(registerform);
});
router.post("/login", async (req, res) => {
  console.log(req.body);
  var loginform = await register.find((register) => {
    if (register.Username === req.body.Username) {
      try {
        bcrypt.compare(req.body.Password, loginform.Password);
      } catch {
        res.status(404).json();
      }
    }
  });
});
// router.get("/login", async (req, res) => {
//   var loginform = await login.find();
//   res.status(200).json(loginform);
// });
// router.post("/login", async (req, res) => {
//   console.log(req.body);
//   var loginform = await login.find(
//     (loginform) => (loginform.Username = req.body.Username)
//   );
//   if (loginform === null) {
//     res.json("not found!!");
//   }
//   try {
//     bcrypt.compare(req.body.Password, loginform.Password);
//   } catch {
//     res.status(404).json();
//   }
// });
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
router.delete("/cart/:id", async (req, res) => {
  try {
    const deletecart = await cart.deleteOne(
      { _id: req.params.id },
      res.redirect("http://localhost:2000/farmhaat/cart")
    );
    res.status(200).json(deletecart);
  } catch (err) {
    res.status(404).json("err:", err);
  }
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
  res.status(200).json(orderform);
});
module.exports = router;
