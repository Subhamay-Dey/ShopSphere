import express from 'express';
import "dotenv/config";
import cookieParser from 'cookie-parser';
import path from 'path';

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

app.listen(PORT, () => (`Server is running on port ${PORT}`))