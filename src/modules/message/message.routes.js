const router = require('express').Router();
const MessagesController = require('./message.controller');

router.get('/', MessagesController.getAll);
router.get('/', MessagesController.create);

router.get('/:id', MessagesController.update);
router.get('/:id', MessagesController.getId);
router.get('/:id', MessagesController.delete);


module.exports = router;
