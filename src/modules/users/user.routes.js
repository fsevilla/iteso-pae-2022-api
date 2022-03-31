const router = require('express').Router();
const controller = require('./user.controller');

router.route('/')
.get(controller.getAll)
.post(controller.create);

router.route('/:idUser')
.get(controller.getId)
.put(controller.update)
.delete(controller.delete);

module.exports = router;

