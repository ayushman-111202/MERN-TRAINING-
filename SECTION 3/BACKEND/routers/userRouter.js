const express = require('express');
const Model = require('../models/UserModel');

const router = express.Router();

//add
router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err);
        });
});

//getall
router.post('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
});

//denotes url parameter
router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})

//betbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

// delete
router.post('/delete', (req, res) => {
    res.send('response from user delete');
});

//update
router.post('/update', (req, res) => {
    res.send('response from user update');
});

module.exports = router;