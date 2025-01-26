const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const ownersRouter = require('./routes/ownersRouter');
const userRouter = require("./routes/userRouter.js");
const productRouter = require("./routes/productRouter.js");
const db = require('./config/mongooseConnection.js');
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Express');
});

app.use("/owners", ownersRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(5000);