
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const myOwnSchema = new Schema({
  name: {type: String},
  students: [{type: Schema.Types.ObjectId, ref: 'Student'}]
})

const School = mongoose.model('School', myOwnSchema)

module.exports = School
