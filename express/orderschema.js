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
  des1: {
    type: String,
    required: true,
  },
  des2: {
    type: String,
    required: true,
  },
  des3: {
    type: String,
    required: true,
  },
  Quantity: {
    type: String,
    required: true,
  },
  des4: {
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
