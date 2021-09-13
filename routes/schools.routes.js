
const express = require('express')
const router = express.Router()

const School = require('../models/School')

router.post('/', async (req, res)=>{
  School.create({name: req.body.name})
  .then((data)=> res.send(data))
  .catch((err)=>res.send(err))
})

module.exports = router;