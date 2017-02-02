'use strict'

const Hotel = require('../../../models/hotel');
const router = require('express').Router();

router.get('/', (req, res) => {
    Hotel.findAll()
    .then((hotels) => {
        res.send(hotels);
    })
});

module.exports = router;