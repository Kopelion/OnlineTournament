const Router = require('express')
const router = new Router()
const matchController = require('../controller/match.controller')

router.post('/match', matchController.createMatch)
router.get('/match', matchController.getMatch)
router.get('/matchPlayers/:id', matchController.getMatchPlayer)
router.get('/match/:id', matchController.getOneMatch)
router.put('/match', matchController.updateMatch)
router.delete('/match/:id', matchController.deleteMatch)


module.exports = router