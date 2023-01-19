const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    title: String,
    text: String,
    categoryID: String,
});





const news = mongoose.model('news', newsSchema)

module.exports = news















// const mongoose = require("mongoose");

// const studentSchema = mongoose.Schema({
//   name: String,
//   phone: String,
//   age: Number,
// });

// const Student = mongoose.model('Student', studentSchema);

// module.exports = Student;