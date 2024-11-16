//importing express
const express = require('express');

// importing user router
const UserRouter = require('./routers/userRouter');

// importing product router
const ProductRouter = require('./routers/productRouter');

//creating an express app

const app = express();

const port = 5000;

// middleware for user
app.use(express.json());
app.use('/user',UserRouter);

// middleware for product
app.use('/product',ProductRouter);



//starting the server

// app.listen(port, () => {
//     console.log('server started');
// })

// route or endpoint

app.get('/',(req, res) => {
    res.send('response from express');
})

//add
app.get('/add',(req, res) => {
    res.send('response from add');
})

//getall
app.get('/getall',(req,res) => {
    res.send('response from getall');
})

//delete
app.get('/delete',(req,res) => {
    res.send('response from delete');
})

//starting the server
app.listen(port, () => {
    console.log('server started');
} )