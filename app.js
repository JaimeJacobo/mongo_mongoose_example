
const express = require('express')

//1. Require mongoose (make sure you have installed it from npm)
const mongoose = require('mongoose')

//2. Use the .connect() method to connect to our Mongo Atlas (hosted online) database. We should put in the argument the link that Mongo Atas gives us. Remember to put the username, password and database name in a separete .env file so we don't upload that sensible information to Github. If you see the "Connected to MONGO ATLAS" message in the terminal, it means that you have connected correctly.
mongoose.connect('<insert your mongo atlas link here>')
.then((result)=>console.log('Connected to MONGO ATLAS'))
.catch((err)=>console.log(err))

//3. Go to the modes folder (Student.js file)

//7. Import the Student model

const Student = require('./models/Student')

const app = express()

// Middleware needed to receive the 
app.use(express.json())

//Routes
app.use("/api/students", require("./routes/students.routes"));
app.use("/api/schools", require("./routes/schools.routes"));

app.listen(5000, ()=>{
  console.log('Connected in Port 5000')
})