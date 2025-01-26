const express = require('express');
const usermodel = require('../models/usermodel');
const bcrypt = require("bcrypt")

const router = express.Router();

router.get('/', function (req, res) {
    return res.send('Users home page');
})

router.post("/register", async function(req, res) {
    try {
        const {fullname, email, password} = req.body;

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, function(err, hash) {
                if(err){
                    res.send(err.message)
                } else {
                    res.send(hash)
                }

            })
        })

        // const createdUser = await usermodel.create({
        //     fullname,
        //     email,
        //     password,
        // })
        // res.send(createdUser);
    } catch (error) {
        res.send(error.message);
    }
}) 

module.exports = router;