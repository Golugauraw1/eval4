require("dotenv").config();
const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://golu:golu@cluster0.umly38y.mongodb.net/social?retryWrites=true&w=majority"
);
module.exports = {
  connection,
};
