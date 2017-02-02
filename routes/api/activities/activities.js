'use strict'

const Activity = require('../../../models/activity');
const router = require('express').Router();

router.get('/', (req, res) => {
    Activity.findAll()
    .then((activities) => {
        res.send(activities);
    })
});

module.exports = router;