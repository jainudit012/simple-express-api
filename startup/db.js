const mongoose = require('mongoose')

const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = function(){
    mongoose.connect(process.env.MONGODB_URI , mongoConfig)
        .then(() => {
            console.log(`Connected to databse at: ${process.env.MONGODB_URI}...`)
        })
}