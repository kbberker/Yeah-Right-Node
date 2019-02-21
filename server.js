const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const games = require('./routes/api/games')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())

// DB Config 
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Use Routes. An express method, that takes a path and callback.

app.use('/api/games', games)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))