const bcrypt = require("bcrypt")
const usermodel = require('../models/usermodel');
const jwt = require('jsonwebtoken')
require("dotenv").config();
const {generateToken} = require("../utils/generateToken")

const registerUser = (req, res) => {
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
                const token = generateToken(createdUser)
                res.cookie("token", token)
                res.json({message: "User created successfully", user: createdUser})
                }  

            })
        })

    } catch (error) {
        res.send(error.message);
    }
}

module.exports.registerUser = registerUser