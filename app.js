const express = require('express');
const app = express();
const route = require('./routers/route');
const connectDB = require('./db/connection');
const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('express-rate-limit');
require('dotenv').config();

app.use(express.json());
app.use(express.static('./public'));

const port = 3000;

app.use('/',route);

app.set('trust proxy',1);
app.use(rateLimiter({
  windowMs : 15 * 60 * 1000,
max : 100
}));
app.use(helmet());
app.use(cors());

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,() => console.log(`Listening on port ${port}`));
    } catch (err){
        console.log(err);
    }
}
start();