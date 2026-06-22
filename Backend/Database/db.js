const mongoose = require('mongoose')
require('dotenv').config()

const link = process.env.MONGO

mongoose.connect(link)
    .then(() => {
        console.log('Connected to MongoDB ✅')
    })
    .catch((err) => {
        console.log(`Not connected to MongoDB ❌ ${err}`)
    })

module.exports = mongoose;