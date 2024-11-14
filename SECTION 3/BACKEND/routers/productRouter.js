const express = require('express');

const router = express.Router();

// add
router.get('/add',(req, res) => {
    res.send('response from product add');
})

//getall
router.get('/getall',(req, res) => {
    res.send('response from product getall');
});

//betbyid
router.get('/getbyid',(req, res) => {
    res.send('response from product getbyid');
});

// delete
router.get('/delete',(req, res) => {
    res.send('response from product delete');
});

//update
router.get('/update',(req, res) => {
    res.send('response from product update');
});

module.exports = router;