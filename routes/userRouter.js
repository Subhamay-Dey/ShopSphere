const express = require('express');

const app = express();
const router = Express.Router();

app.router.get('/', function (req, res) {
    res.send('Users home page');
})

module.exports = router;