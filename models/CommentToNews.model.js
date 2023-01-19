const mongoose = require('mongoose')

const commentToNewsSchema = mongoose.Schema({
    nameComentatorSchema: String,
    text: String,
    idNewsToComment: String,
})

const commentToNews = mongoose.model('commentToNews', commentToNewsSchema)

module.exports = commentToNews
