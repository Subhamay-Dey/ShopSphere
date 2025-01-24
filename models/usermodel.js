import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1.27017/Shopsphere")

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
})

module.exports = mongoose.model("user", userSchema)