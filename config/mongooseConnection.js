import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1.27017/Shopsphere").then(function(){
    console.log("Connected to database")
}).catch(function(err){
    console.log(err.message)
})

module.exports = mongoose.connection;