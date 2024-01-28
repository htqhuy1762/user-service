require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express(); //app express
const port = process.env.PORT || 7777;
const hostname = process.env.HOST_NAME; // => hardcode

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// config template engine
configViewEngine(app);

// use router
app.use('/', webRoutes);

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`);
        });
    } catch (error) {
        console.log('>>> Error connect to DB: ', error);
    }
})();
