// To use .env file for securely sharing secret key or other authentication secrets
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')

// custom module imports
const startDatabase = require('./src/db')
const userRoutes = require('./src/routes/user.routes')

// create express instance
const app = express()

// set the port for devlopment and for heroku
const PORT = process.env.PORT || 4000

// Use Express's in-built middleware to parse json and form functionality
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Use Helmet for cross-site attack protection
app.use(helmet())

// use morgan for logging functionality
app.use(morgan('dev'))

// use cors for cross origin accessing
app.use(cors())

// routes fo post and user
app.use('/user', userRoutes)

app.get('/',(req,res) => {
    res.send('Main URL Accessed')
})

// listen to port
app.listen(PORT,() => {
    console.log(`Server is running at port ${PORT}`)
    startDatabase()
})