'use strict'

const Day = require('../../../models/day');
const Hotel = require('../../../models/hotel');
const Activity = require('../../../models/activity');
const Restaurant = require('../../../models/restaurant');
const router = require('express').Router();

router.get('/', (req, res) => {
    Day.findAll()
    .then((days) => {
        res.send(days);
    });
});

////////////////
// DAY ROUTES
////////////////

router.get('/:id', (req, res) => {
    Day.findById(req.params.id)
    .then((day) => {
        res.send(day);
    });
});

router.post('/:id', (req, res) => {
    Day.create({
        number: req.params.id,
    })
    .then((day) => {
        res.send(day);
    })
});

router.delete('/:id', (req, res) => {
    Day.findById(req.params.id)
    .then((day) => {
        day.destroy();
    });
});


////////////////
// RESTAURANT ROUTES
////////////////

router.delete('/:dayId/restaurants/:restaurantId', (req, res) => {

    let findingDay = Day.findById(req.params.dayId);
    let findingRestaurant = Restaurant.findById(req.params.restaurantId);

    Promise.all([findingDay, findingRestaurant])
    .then((results) => {
        let day = results[0];
        let restaurant = results[1];

        day.removeRestaurant(hotel);
    })
});

router.post('/:id/restaurants/', (req, res) => {

    let findingDay = Day.findOne({
        where: {
            id: req.params.id
    }});
    
    let findingRestaurant = Restaurant.findOne({
        where: {
            name: req.body.name
        }
    });

    Promise.all([findingDay, findingRestaurant])
    .then((result) => {
        let day = result[0];
        let restaurant = result[1];

        day.addRestaurant(restaurant);

        console.log("Restaurant added:", restaurant.name);
        res.end();
    }); 
});


///////////////////
// HOTEL ROUTES
////////////////////

router.delete(':dayId/hotels/:hotelId', (req, res) => {

    let findingDay = Day.findById(req.params.dayId);
    let findingHotel = Hotel.findById(req.params.hotelId);

    Promise.all([findingDay, findingHotel])
    .then((results) => {
        let day = results[0];
        let hotel = results[1];

        day.removeHotel(hotel);
    })
});

router.post('/:id/hotels/', (req, res) => {

    let findingDay = Day.findOne({
        where: {
            id: req.params.id
    }});
    
    let findingHotel = HOtel.findOne({
        where: {
            name: req.body.name
        }
    });

    Promise.all([findingDay, findingHotel])
    .then((result) => {
        let day = result[0];
        let hotel = result[1];

        day.addHotel(hotel);

        console.log("Hotel added:", hotel.name);
        res.end();
    }); 
});


///////////////////
// ACTIVITY ROUTES
/////////////////////

router.delete('/:dayId/activities/:activityId', (req, res) => {

    let findingDay = Day.findById(req.params.dayId);
    let findingActivity = Activity.findById(req.params.activityId);

    Promise.all([findingDay, findingActivity])
    .then((results) => {
        let day = results[0];
        let activity = results[1];
        day.removeActivity(activity);
    })
});

router.post('/:id/activities/', (req, res) => {

    let findingDay = Day.findOne({
        where: {
            id: req.params.id
    }});
    
    let findingActivity = Activity.findOne({
        where: {
            name: req.body.name
        }
    });

    Promise.all([findingDay, findingActivity])
    .then((result) => {
        let day = result[0];
        let activity = result[1];

        day.addActivity(activity);

        console.log("Activity added:", activity.name);
        res.end();
    }); 
});

module.exports = router;