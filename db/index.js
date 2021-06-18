const express = require("express");
const app = express();
const route = require("./route");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const { Router } = require("express");
app.use(morgan("dev"));
app.use(express.json());
app.use("/farm", route);
app.listen(2000, () => {
  console.log("Port started on 2000");
});

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/myapp", (err) => {
  console.log(err);
});
// app.get("/", (req, res) => {
//   res.status(200).send("working");
// });
