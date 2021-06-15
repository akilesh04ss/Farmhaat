const mongoose = require("mongoose");
const order = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Delivery: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("order", order);
