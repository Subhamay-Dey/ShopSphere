const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    return res.send('Users home page');
})

module.exports = router;