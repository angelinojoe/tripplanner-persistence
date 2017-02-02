var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
const Day = require('./day');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: 'day-restaurant'})
Day.belongsToMany(Activity, {through: 'day-activity'});

module.exports = db;
