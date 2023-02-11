const express = require('express');
const app = express();
const route = require('./routers/route');
const connectDB = require('./db/connection');
require('dotenv').config();

app.use(express.static('./public'));

const port = 3000;

app.use('/',route);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,() => console.log(`Listening on port ${port}`));
    } catch (err){
        console.log(err);
    }
}
start();