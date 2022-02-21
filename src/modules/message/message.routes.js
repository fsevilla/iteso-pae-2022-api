const router = require('express').Router();
const controller = require('./message.controller');

router.route('/')
.get(controller.getAll)
.post(controller.create);

router.route('/:idMessage')
.get(controller.getId)
.put(controller.update)
.delete(controller.delete);

module.exports = router;

