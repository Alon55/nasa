const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/api')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

//app.use(express.static(path.join(__dirname, 'dist')))
//app.use(express.static(path.join(__dirname, 'node_modules')))

mongoose.connect("mongodb://localhost/FavoritesStars", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', api)

app.listen(8080)
