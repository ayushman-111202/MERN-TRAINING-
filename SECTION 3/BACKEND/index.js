const express = require('express');

//creating an express app

const app = express();

const port = 5000;

//starting the server

app.listen(port, () => {
    console.log('server started');
})