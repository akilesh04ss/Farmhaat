const mongoose = require("mongoose");
const investor = mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("investor", investor);
