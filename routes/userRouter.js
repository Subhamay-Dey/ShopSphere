const express = require('express');
const usermodel = require('../models/usermodel');

const router = express.Router();

router.get('/', function (req, res) {
    return res.send('Users home page');
})

router.post("/register", async function(req, res) {
    try {
        const {fullname, email, password} = req.body;
        const createdUser = await usermodel.create({
            fullname,
            email,
            password,
        })
        res.send(createdUser);
    } catch (error) {
        console.log(error.message);
    }
}) 

module.exports = router;