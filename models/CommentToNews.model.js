const mongoose = require("mongoose");

const commentToNewsSchema = mongoose.Schema({
  nameComentatorSchema: String,
  text: String,
  news: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'News',
  },
});

const CommentToNews = mongoose.model("CommentToNews", commentToNewsSchema);

module.exports = CommentToNews;
