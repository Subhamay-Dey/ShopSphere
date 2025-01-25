const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");

mongoose
  //  .connect("mongodb://127.0.0.1:27017/Shopsphere")
  //   .connect(`${process.env.MONGODB_URI}/Shopsphere`)
  .connect(`${config.get("MONGODB_URI")}/Shopsphere`)
  .then(function () {
    dbgr("Connected to the database");
  })
  .catch(function (err) {
    dbgr("Failed to connect to the database");
  });

module.exports = mongoose.connection;
