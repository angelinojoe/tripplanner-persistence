const db = require('./_db');
const sequelize = require('sequelize');


Day = db.define('day', {
    number: {
        type: sequelize.INTEGER,
        allowNull: false
    }
},
{ classMethods: {
    renumberDays: function(dayNum){
        Day.findAll({
            where: {
                number: {
                    $gt: dayNum
                }
            }

        })
        .then((days) => {
            days.forEach((day) => {
                day.number--;
                day.save();
            });
        });
    }
}
});


module.exports = Day;
