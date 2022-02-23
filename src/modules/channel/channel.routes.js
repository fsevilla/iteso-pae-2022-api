const router = require('express').Router();
const ChannelsController = require('./channels.controller');

router.get('/', ChannelsController.getAll);
router.get('/:id', ChannelsController.getById);
router.post('/', ChannelsController.create);
router.put('/:id', ChannelsController.update);
router.delete('/:id', ChannelsController.delete);
router.patch('/:id', ChannelsController.patch);

module.exports = router;
