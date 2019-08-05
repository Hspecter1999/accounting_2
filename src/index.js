const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../src/statics')
const viewsPath = path.join(__dirname, '../src/templates/views')
const partialsPath = path.join(__dirname, '../src/templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.use(express.json())

app.get('', (req, res) => {
    res.render('index.hbs', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})