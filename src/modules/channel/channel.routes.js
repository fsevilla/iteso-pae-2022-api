const router = require('express').Router();
const ChannelsController = require('./channels.controller');

router.get('/', ChannelsController.getAll);
router.get('/:id', ChannelsController.getId);
router.post('/', ChannelsController.create);
router.delete('/:id', ChannelsController.delete);
router.put('/:id', ChannelsController.update);

module.exports = router;
