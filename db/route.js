const express = require("express");
const router = express.Router();
const investor = require("./investorsca");
router.get("/", async (req, res) => {
  var investorform = await investor.find();
  res.status(200).json(investorform);
});
router.post("/", async (req, res) => {
  console.log(req.body);
  var investorform = await investor.create({
    Email: req.body.Email,
  });
  res.status(200).json(investorform);
});
module.exports = router;
