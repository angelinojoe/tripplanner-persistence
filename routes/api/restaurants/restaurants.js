'use strict'

const Restaurant = require('../../../models/restaurant');
const router = require('express').Router();

router.get('/', (req, res) => {
    Restaurant.findAll()
    .then((restaurants) => {
        res.send(restaurants);
    })
});

module.exports = router;