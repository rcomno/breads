const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about Breads!')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//Listen
app.listen(PORT, () => {
    console.log('noming at port', PORT);
})