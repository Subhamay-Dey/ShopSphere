const jwt = require("jsonwebtoken");
const usermodel = require("../models/usermodel");

module.exports.isLoggedIn = async function(req, res) {
    if(!req.cookies.token) {
        req.flash("error", "you need to login first");
        return res.redirect("/");
    }
    
    try {
        let extracted = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await usermodel.findOne({email: extracted.email}).select("-password")
        req.user = user
        next();
    } catch (error) {
        req.flash("error", "Something went wrong.");
        return res.redirect("/")
    }
}