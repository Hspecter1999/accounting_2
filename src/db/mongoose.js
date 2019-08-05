const mongoose = require('mongoose')
// const express = require('express')
// const app = express()


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open',() => console.log('connected to databse')) // confirms that db is connected

// app.use(express.json())
// route ecample 
// const subsRouter = require('./routes/subscribers')
// app.use('/subscribers', subsRouter)
