const express = require('express');
const app = express();
const logger = require('morgan');
const server = require('http').Server(app);

app.use(logger("dev"));

app.use(express.static('public'));

server.listen(8080, function() {
    console.info("Express was init successfully. ✅🚀");
})