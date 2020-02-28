const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('../routes/index.js')

module.exports =function(app){
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.json())
    app.use('/api/', routes)
}