// Importing libraries
const express = require('express')
const app = express()

const db = require('./config')

// Importing system variables
const PORT = process.env.PORT || 3000

// Configuring app
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Using routes
app.use('/user', require('./routes/userRoutes'))


// Init server
app.listen(PORT , console.log('Running server'))