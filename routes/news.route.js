const { Router } = require('express')
const { newsController } = require('../controllers/news.controller')

const router = Router()

router.post('/news', newsController.postNews)
router.delete('/news/:id', newsController.deleteNews)
router.patch('/news/:id', newsController.updateNews)
router.get('/news/:id', newsController.getByIdNews)
router.get('/news', newsController.getNews)
router.get('/news/:id', newsController.getNewsByIdCat)


module.exports = router;