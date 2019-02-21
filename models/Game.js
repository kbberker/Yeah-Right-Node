const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GameSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  pin: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Game = mongoose.model('game', GameSchema)