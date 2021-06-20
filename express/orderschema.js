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
  Userid: {
    type: Number,
  },
  Order: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  Delivery: {
    type: Date,
    required: true,
    default: () => Date.now() + 48 * 60 * 60 * 1000,
  },
});
module.exports = mongoose.model("order", order);
