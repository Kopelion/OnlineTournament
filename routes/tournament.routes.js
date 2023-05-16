const Router = require('express')
const router = new Router()
const tournamentController = require('../controller/tournament.controller')

router.post('/tournament', tournamentController.createTournament)
router.get('/tournament', tournamentController.getTournament)
router.get('/tournament/:id', tournamentController.getOneTournament)
router.put('/tournament', tournamentController.updateTournament)
router.delete('/tournament/:id', tournamentController.deleteTournament)


module.exports = router