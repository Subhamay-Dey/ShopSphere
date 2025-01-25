const express = require('express');
const router = express.Router();
const OwnerModel = require("../models/ownersmodel");

router.get('/', function (req, res) {
    res.send('Owners home page');
});

if(process.env.NODE_ENV === "development"){
    router.post("/create", async function(req, res){
        let owners = await OwnerModel.find();
        if(owners.length > 0) {
            return res.send("Owner already created");
        }
        
        let {fullname, email, password} = req.body

        let createdOwner = await OwnerModel.create({
            fullname,
            email,
            password,
        })
        res.send(createdOwner);
    })
}

module.exports = router;