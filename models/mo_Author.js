const mongoose = require('mongoose');

//In mongoDB it's the same as a table
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  }
})

module.exports = mongoose.model('Author', authorSchema)