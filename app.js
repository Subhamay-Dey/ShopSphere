const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const ownersRouter = require('./routes/ownersRouter');
const userRouter = require("./routes/userRouter.js");
const productRouter = require("./routes/productRouter.js");
const indexRouter = require("./routes/index.js")
const db = require('./config/mongooseConnection.js');
const flash = require("connect-flash");
const expressSession = require("express-session");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SECRET_KEY
    })
)
app.use(flash())
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Express');
});

app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(5000);