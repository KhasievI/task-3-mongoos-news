const News = require("../models/News.model");

module.exports.newsController = {
  postNews: (req, res) => {
    News
      .create({
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
      })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  deleteNews: (req, res) => {
    News.findByIdAndDelete(req.params.id).then((news) => {
      res.json(news);
    });
  },
  updateNews: (req, res) => {
    News
      .findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
      })
      .then((news) => {
        res.json(`Новость отредактирована!`);
      });
  },
  getByIdNews: (req, res) => {
    News.findById(req.params.id).then((news) => {
      res.json(news);
    });
  },
  getNews: (req, res) => {
    News.find().populate('category').then((news) => {
      res.json(news);
    });
  },
  getNewsByIdCat: (req, res) => {
    News
      .find({category: req.params.category})
      .populate('category')
      .then((news) => {
        res.json(news);
      });
  },
};
