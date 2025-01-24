import express from 'express';
import "dotenv/config";
import cookieParser from 'cookie-parser';
import path from 'path';
import ownerRouter from './routes/ownerRouter.js';
import db from './config/mongooseConnection.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Express');
})

app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => (`Server is running on port ${PORT}`))