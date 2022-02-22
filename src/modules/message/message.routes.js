const router = require('express').Router();
const MessageController = require('./message.controller');

router.get('/', MessageController.getAll);
router.get('/:id', MessageController.getId);
router.post('/', MessageController.create);
router.delete('/:id', MessageController.delete);
router.put('/:id', MessageController.update);

module.exports = router;
