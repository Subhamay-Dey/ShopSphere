const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Shopsphere").then(function(){
    console.log("Connected to database")
}).catch(function(err){
    console.log(err.message)
})

module.exports = mongoose.connection;