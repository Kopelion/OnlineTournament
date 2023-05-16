const Router = require('express')
const router = new Router()
const organizerController = require('../controller/organizer.controller')

router.post('/organizer', organizerController.createOrganizer)
router.get('/organizer', organizerController.getOrganizer)
router.get('/organizer/:id', organizerController.getOneOrganizer)
router.put('/organizer', organizerController.updateOrganizer)
router.delete('/organizer/:id', organizerController.deleteOrganizer)


module.exports = router