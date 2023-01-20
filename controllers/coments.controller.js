const Comment = require("../models/CommentToNews.model");

module.exports.comment = {
  postCommentNews: (req, res) => {
    Comment
      .create({
        nameComentatorSchema: req.body.nameComentatorSchema,
        text: req.body.text,
        news: req.body.news,
      })
      .then((comment) => {
        res.json(comment);
      });
  },
  deleteComment: (req, res) => {
    Comment.findByIdAndDelete(req.params.id).then((comm) => {
      res.json(comm);
    });
  },
  getCommById: (req, res) => {
    Comment
      .find({news: req.params.news})
      .populate('news')
      .then((comms) => {
        res.json(comms);
      });
  },
};
