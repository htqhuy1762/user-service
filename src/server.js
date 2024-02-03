require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');

const app = express(); //app express
const port = process.env.PORT || 7777;
const hostname = process.env.HOST_NAME; // => hardcode

//config file upload
app.use(fileUpload());

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// config template engine
configViewEngine(app);

// use web router
app.use('/', webRoutes);
// use api router
app.use('/v1/api/', apiRoutes);

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
