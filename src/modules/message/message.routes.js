const router = require('express').Router();
const MessageController = require('./messages.controller');

router.get('/', MessageController.getAll);
router.get('/:id', MessageController.getById);
router.post('/', MessageController.create);
router.put('/:id', MessageController.update);
router.delete('/:id', MessageController.delete);
router.patch('/:id', MessageController.patch);

module.exports = router;
