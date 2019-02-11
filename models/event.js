const mongoose = require('mongoose');

const Event = mongoose.model('Event', new mongoose.Schema({
    place : String,
    type : String,
    cost : { actual_cost : Number, discount_cost: Number},
    itinerary : { 
        welcome_drinks: String,
        breakfast : [ String ],
        games: [ String ],
        watergames: String,
        Day_1: [ String ],
        Day_2: [ String ]
    }
}));

module.exports = { Event };