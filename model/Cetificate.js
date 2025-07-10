const mongoose = require('mongoose')

const cetificateSchema = new mongoose.Schema({
    details:{
        type:String,
        required:true
    },
    issueOn:{
        type:Date,
        required:true
    },
    eventId:{
        type:String,
        required:true 
    },
    studentId:{
        type:String,
        required:true
    }
});

module.exports = mongoose.module('Cetificate',cetificateSchema)