const db = require('./_db');
const sequelize = require('sequelize');
const Hotel = require('./hotel');

Day = db.define('day', {
    number: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Day;