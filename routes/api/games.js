const express = require('express')
const router = express.Router()

// Game Model
const Game = require('../../models/Game')

// @route   GET api/games
// @desc    Get all games
// @access  Public
router.get('/', (req, res) => {
  Game.find()
    .sort({ date: -1 }) 
    .then(games => res.json(games))
})

// @route   POST api/games
// @desc    Create a game
// @access  Public
router.post('/', (req, res) => {
  const newGame = new Game({
    name: req.body.name,
    pin: req.body.pin
  })

  newGame.save().then(game => res.json(game))
})

module.exports = router 