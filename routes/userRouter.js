const express = require('express');

const router = express.Router();

const {registerUser} = require("../controllers/authController")

router.get('/', function (req, res) {
    return res.send('Users home page');
})

router.post("/register", registerUser) 

module.exports = router;