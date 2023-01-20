const Category = require("../models/Category.model");

module.exports.categoriesController = {
  postCategory: (req, res) => {
    Category
      .create({
        nameCategory: req.body.nameCategory,
      })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  deleteCategory: (req, res) => {
    Category.findByIdAndDelete(req.params.id).then((cat) => {
      res.json(cat);
    });
  },
  getCategories: (req, res) => {
    Category.find().then((data) => {
      res.json(data);
    });
  },
};
