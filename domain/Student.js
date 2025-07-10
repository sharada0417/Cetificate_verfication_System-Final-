const Student = require('../model/Student');

const createStudent = async(studentData) => {
    const student = new Student(studentData);
    await student.save();
    return student;
};

module.exports = { createStudent };