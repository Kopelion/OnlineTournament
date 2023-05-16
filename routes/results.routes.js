const Router = require('express')
const router = new Router()
const resultsController = require('../controller/results.controller')

router.post('/results', resultsController.createResults)
router.get('/results', resultsController.getResults)
router.get('/results/:id', resultsController.getOneResults)
router.put('/results', resultsController.updateResults)
router.delete('/results/:id', resultsController.deleteResults)


module.exports = router