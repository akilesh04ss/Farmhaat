const mongoose = require("mongoose");
const investor = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Material: {
    type: String,
    required: true,
  },
  Wgt: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("investor", investor);
