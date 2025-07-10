const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    registraionNumber: {
        type:String,
        required:true,
        unique:true
    },
    degree:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Students',StudentSchema);
