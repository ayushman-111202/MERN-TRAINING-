const mongoose = require('mongoose');

const url = "";

//asynchronous function - returns Promise
mongoose.connect(url)
    .then((result) => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log(err);
    });