const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const StarSchema = new Schema ({
title: String,
image: String,
description: String
})

const Favorite = mongoose.model('Favorite', StarSchema)

module.exports = Favorite
