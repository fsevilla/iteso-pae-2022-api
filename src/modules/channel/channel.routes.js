const router = require('express').Router();
const ChannelsController = require('./channels.controller');

router.get('/', ChannelsController.getAll);
router.get('/', ChannelsController.create);

router.get('/:id', ChannelsController.update);
router.get('/:id', ChannelsController.getId);
router.get('/:id', ChannelsController.delete);

module.exports = router;
