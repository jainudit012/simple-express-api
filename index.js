const express = require('express');

require('dotenv').config()

const app = express();

require('./startup/db')()
require('./startup/routes')(app)
require('./startup/prod')(app)

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}...`)
})

module.exports = app