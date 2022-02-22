const router = require('express').Router();
const RoomsController = require('./rooms.controller');

router.get('/', RoomsController.getAll);
router.put('/', RoomsController.update);
router.post('/', RoomsController.create);
router.delete('/', RoomsController.delete);

module.exports = router;
