const router = require('express').Router();
const controller = require('./room.controller');

router.route('/')
.get(controller.getAll)
.post(controller.create);

router.route('/:idRoom')
.get(controller.getId)
.put(controller.update)
.delete(controller.delete);

module.exports = router;
