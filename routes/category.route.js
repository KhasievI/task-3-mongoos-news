const { Router } = require("express");
const { categoriesController } = require("../controllers/category.controller");

const router = Router();

router.post("/category", categoriesController.postCategory);
router.delete("/category/:id", categoriesController.deleteCategory);
router.get("/category", categoriesController.getCategories);

module.exports = router;
