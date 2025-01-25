const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Shopsphere")
  .then(function () {
    console.log("This is console response")
    dbgr("Connected to the database");
  })
  .catch(function (err) {
    console.log(err);
    dbgr("Failed to connect to the database");
  });

module.exports = mongoose.connection;