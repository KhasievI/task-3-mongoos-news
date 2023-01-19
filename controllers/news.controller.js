const news = require('../models/News.model')

module.exports.newsController = {
    postNews: (req, res) => {
        news.create({
            title: req.body.title,
            text: req.body.text,
            categoryID: req.body.categoryID,
        })
        .then((data) => {
            res.json(data);
        })
        .catch(() => res.json("error"))
    },
    deleteNews: (req, res) => {
        news.findByIdAndDelete(req.params.id).then((news) => {
            res.json(news)
        })
    },
    updateNews: (req, res) => {
        news.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text,
            categoryID: req.body.categoryID, }).then((news) => {
                res.json(`Новость отредактирована!`)
            })
    },
    getByIdNews: (req, res) => {
        news.findById(req.params.id).then((news) => {
            res.json(news)
        })
    },
    getNews: (req, res) => {
        news.find().then((news) => {
            res.json(news)
        })
    },
    getNewsByIdCat: (req, res) => {
        news.find(req.params.categoryID).then((news) => {
            res.json(news)
        })
    }
}