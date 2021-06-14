const mongoose = require("mongoose");
const feedback = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Msg: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("feedback", feedback);
