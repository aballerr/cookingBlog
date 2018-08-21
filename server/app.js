const express = require('express')
const app = express()
const port = 3000
const test = require('./test');
const blog = require('./models/blog');
const mongoose = require('mongoose');
const databaseConfig = require('./config/database').database

//Connection to MongoDB
mongoose.connect(databaseConfig, { useNewUrlParser: true })
let db = mongoose.connection
db.on('error', console.error.bind(console, 'mongodb connection error'))


app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
});





let blogJson = {
    id: 1,
    title: "hello world"
}