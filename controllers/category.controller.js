const category = require('../models/Category.model')

module.exports.categoriesController = {
    postCategory: (req, res) => {
        category.create({
            nameCategory: req.body.nameCategory,
        })
        .then((data) => {
            res.json(data);
        })
        .catch(() => res.json("error"))
    },
    deleteCategory: (req, res) => {
        category.findByIdAndDelete(req.params.id).then((cat) => {
            res.json(cat)
        })
    },
    getCategories: (req, res) => {
        category.find().then((data) => {
            res.json(data)
        })
    },
    
}
