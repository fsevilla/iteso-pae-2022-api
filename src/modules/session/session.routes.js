const router = require('express').Router();
const SessionsController = require('./sessions.controller');

router.get('/', SessionsController.getAll);
router.get('/:id', SessionsController.getById);
router.post('/', SessionsController.create);
router.put('/:id', SessionsController.update);
router.delete('/:id', SessionsController.delete);
router.patch('/:id', SessionsController.patch);

module.exports = router;

