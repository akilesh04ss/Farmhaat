const mongoose = require("mongoose");
const cart = mongoose.Schema({
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
  Quantity: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("cart", cart);
