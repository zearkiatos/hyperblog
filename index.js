const express = require('express');
const app = express();
const logger = require('morgan');
const server = require('http').Server(app);
require('dotenv').config()

app.use(logger("dev"));

app.use(express.static('public'));

server.listen(process.env.PORT, function() {
    console.info("Express was init successfully. ✅🚀");
})