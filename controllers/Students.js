const express = require('express');
const router = express.Router();
const studentDomain = require('../domain/Student');

router.post('/',async(req,res)=>{
    try {
       const student = await studentDomain.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({
            error_message:error.message
        });
    }
});

module.exports = router;