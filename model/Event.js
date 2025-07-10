const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventId :{
        type :String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    organizer:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Event',eventSchema)