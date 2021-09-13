
const express = require('express')
const router = express.Router()

const Student = require('../models/Student')
const School = require('../models/School')

router.post('/', async (req, res)=>{

  const {firstName, lastName, age, registered, grades, school} = req.body

  try {
    const student = await Student.create({firstName, lastName, age, registered, grades, school})

    const updatedSchool = await School.findByIdAndUpdate(school, { $push: {students: student._id }}, {new: true} ).populate('students')
    res.send(updatedSchool)

  } catch(err) {
    res.send(err)
  }
})




// Students.find({})   // SELECT * FROM students
// Students.findByIdAndUpdate('263451236426392',  {firstName: 'Monica'})   // UPDATE INTO students SET firstName = 'Monica' WHERE id = '263451236426392';

module.exports = router;