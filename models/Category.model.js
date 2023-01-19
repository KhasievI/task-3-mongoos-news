const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    nameCategory: String,
});

const category = mongoose.model('category', categorySchema)

module.exports = category
