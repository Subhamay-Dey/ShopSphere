const express = require('express');
const usermodel = require('../models/usermodel');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
require("dotenv").config()

const router = express.Router();

router.get('/', function (req, res) {
    return res.send('Users home page');
})

router.post("/register", async function(req, res) {
    try {
        const {fullname, email, password} = req.body;

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash) {
                if(err){
                    res.send(err.message)
                } else {
                const createdUser = await usermodel.create({
                    fullname,
                    email,
                    password: hash,
                })
                const token = jwt.sign({email, id:user._id}, "P");
                res.cookie("token", token)
                res.json({message: "User created successfully", user: createdUser})
                }  

            })
        })

    } catch (error) {
        res.send(error.message);
    }
}) 

module.exports = router;