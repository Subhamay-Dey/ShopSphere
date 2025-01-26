const express = require('express');
const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn")

router.get('/', function (req, res) {
    let error = req.flash("error");
    return res.render('index', {error});
});

router.get("/shop", isLoggedIn, function(req, res) {
    return res.render("shop");
})

module.exports = router;