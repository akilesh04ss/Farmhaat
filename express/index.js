const express = require("express");
const { route } = require("./route");
const app = express();
const cors = require("cors");
const router = require("./route");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
app.use("/farmhaat", router);

app.listen(2000, () => {
  console.log("port working in 2000");
});
mongoose.connect(
  "mongodb://localhost:27017/register",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("db connected");
  }
);
