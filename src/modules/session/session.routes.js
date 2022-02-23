const router = require('express').Router();
const SessionsController = require('./session.controller');

router.get('/', SessionsController.getAll);
router.get('/', SessionsController.create);

router.get('/:id', SessionsController.update);
router.get('/:id', SessionsController.getId);
router.get('/:id', SessionsController.delete);

module.exports = router;
