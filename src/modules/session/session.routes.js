const router = require('express').Router();
const SessionController = require('./session.controller');

router.get('/', SessionController.getAll);
router.get('/:id', SessionController.getId);
router.post('/', SessionController.create);
router.delete('/:id', SessionController.delete);
router.put('/:id', SessionController.update);

module.exports = router;
