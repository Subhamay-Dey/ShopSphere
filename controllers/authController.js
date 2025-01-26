const bcrypt = require("bcrypt")
const usermodel = require('../models/usermodel');
const jwt = require('jsonwebtoken')
require("dotenv").config();
const {generateToken} = require("../utils/generateToken")

async function registerUser (req, res){
    try {
        const {fullname, email, password} = req.body;

        let user = await usermodel.find({email:email})
        if(user) {
            res.send({status:501, message:"User is already registered"})
        }

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

async function loginUser (req, res) {
    const {email, password} = req.body;
    try {
        const user = await usermodel.findOne({email:email, password:password})
        if(!user) {
            res.send({status: 501, message: "Invalid email or password"})
        }

        bcrypt.compare(password, user.password, function(err, data){
            if(data) {
                const token = generateToken(user);
                res.cookie("token", token);
                res.json({message: "User logged in successfully", user: user})
            } else {
                res.send({status: 501, message: "Invalid email or password"})
            }
        })
    } catch (error) {
        res.send(err.message)
    }
}

module.exports.loginUser = loginUser