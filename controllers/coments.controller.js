const comment = (require('../models/CommentToNews.model'))

module.exports.comment = {
    postCommentNews: (req, res) => {
        comment.create({
            nameComentatorSchema: req.body.nameComentatorSchema,
            text: req.body.text,
            idNewsToComment: req.body.idNewsToComment,
        }).then((comment) => {
            res.json(comment)
        })
    },
    deleteComment: (req, res) => {
        comment.findByIdAndDelete(req.params.id).then((comm) => {
            res.json(comm)
        })
    },
    getCommById: (req, res) => {
        comment.find(req.params.idNewsToComment).then((comms) => {
            res.json(comms)
        })
    }
}