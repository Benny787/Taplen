// this is server.js
const express = require('express');
const routes = require('./routes');
var bodyParser = require('body-parser');
let cors = require("cors");


const app = express();
const port = 5000;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('../frontend/public'));
app.use(express.json());
app.use('/api', routes);
app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});