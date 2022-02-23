const router = require('express').Router();
const RoomController = require('./rooms.controller');

router.get('/', RoomController.getAll);
router.get('/:id', RoomController.getById);
router.post('/', RoomController.create);
router.put('/:id', RoomController.update);
router.delete('/:id', RoomController.delete);
router.patch('/:id', RoomController.patch);

module.exports = router;

