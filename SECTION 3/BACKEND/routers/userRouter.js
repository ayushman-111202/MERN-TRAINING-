const express = require('express');

const router = express.Router();

//add
router.post('/add',(req, res) => {
    res.send('response from user add');
});

//getall
router.post('/getall',(req, res) => {
    res.send('response from user getall');
});

//betbyid
router.post('/getbyid',(req, res) => {
    res.send('response from user getbyid');
});

// delete
router.post('/delete',(req, res) => {
    res.send('response from user delete');
});

//update
router.post('/update',(req, res) => {
    res.send('response from user update');
});

module.exports = router;