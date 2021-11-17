const express = require("express");
const router = express.Router();
const register = require("./registerschema");
const investor = require("./investorschema");
const feedback = require("./feedbackschema");
const cart = require("./cartschema");
const order = require("./orderschema");
const bcrypt = require("bcrypt");
var nodemailer = require("nodemailer");
const sendmail = require("sendmail")();
router.get("/register", async (req, res) => {
  var registerform = await register.find();
  res.status(200).json(registerform);
});
router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    var email = await register.findOne({ Email: req.body.Email });
    var usr = await register.findOne({ Username: req.body.Username });
    var f = await register.findOne({ Fname: req.body.Fname });
    var s = await register.findOne({ Sname: req.body.Sname });
    var n = await register.findOne({ Phone: req.body.Phone });
    if (usr) {
      return res.status(200).json({ err: "Username already exists" });
    }
    if (email) {
      return res.status(200).json({ err: "Email already exists" });
    }
    if (f) {
      return res.status(200).json({ err: "First name already exists" });
    }
    if (s) {
      return res.status(200).json({ err: "Second name already exists" });
    }
    if (n) {
      return res.status(200).json({ err: "Phone Number already exists" });
    }
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
    sendmail(
      {
        from: "no-reply@yourdomain.com",
        to: req.body.Email,
        subject: "test sendmail",
        html: "Mail of test sendmail ",
      },
      function (err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
      }
    );
  } catch (err) {
    res.status(404).json();
    console.log(err);
  }
  res.status(200).json({ err: null });
});
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    var Userdata = await register.findOne({ Username: req.body.Username });
    if (!Userdata) {
      return res.status(200).json({ err: "Username Not Exists" });
    }
    var validation = await bcrypt.compare(req.body.Password, Userdata.Password);
    if (!validation) {
      return res.status(200).json({ err: "Password Incorrect" });
    }
  } catch (err) {
    res.status(404).json(err);
  }
  var usernme = req.body.Username;
  res.status(204).json({ err: null, usernme: usernme });
});

router.get("/investor", async (req, res) => {
  var investorform = await investor.find();
  res.status(200).json(investorform);
});
router.post("/investor", async (req, res) => {
  console.log(req.body);
  try {
    var investorform = await investor.create({
      Name: req.body.Name,
      Email: req.body.Email,
      Material: req.body.Material,
      Description: req.body.Description,
      Wgt: req.body.Wgt,
    });
  } catch (err) {
    res.status(404).json(err);
  }
  res.status(200).json({ err: null });
});
router.post("/feedback", async (req, res) => {
  console.log(req.body);
  var feedbackform = await feedback.create({
    Name: req.body.Name,
    Email: req.body.Email,
    Msg: req.body.Msg,
    Contact: req.body.Contact,
  });
  res.status(200).json();
});
router.get("/cart", async (req, res) => {
  cartform = await cart.find();
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
router.delete("/carts", async (req, res) => {
  cartform = await cart.deleteMany();
  res.status(200).json(cartform);
});
router.post("/cart", async (req, res) => {
  console.log(req.body);
  var cartform = await cart.create({
    Name: req.body.Name,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
    Image: req.body.Image,
    des1: req.body.des1,
    des2: req.body.des2,
    des3: req.body.des3,
    des4: req.body.des4,
    cartusr: req.body.cartusr,
  });
  res.status(200).json(cartform);
  console.log(req.body);
});
router.get("/order", async (req, res) => {
  var orderform = await order.find();
  res.status(200).json(orderform);
});
router.post("/order", async (req, res) => {
  console.log(req.body);
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
    cartusr: req.body.cartusr,
  });
  res.status(200).json(orderform);
});
module.exports = router;
