// install dotenv
require('dotenv').config();

// install libraries
const express = require('express');
const app = express();
const {router} = require('./router/Router')

// install PORT
const port = process.env.PORT || 7000

// cors Option Origin
let originOptionsCors = {
    origin: `http://localhost:${port}`,
};

// routing
app.use('/', router);

app.listen(port, () => console.log("Listening port", port));