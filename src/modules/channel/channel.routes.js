const router = require('express').Router();
const ChannelsController = require('./channels.controller');

router.get('/', ChannelsController.getAll);
router.post('/', ChannelsController.create);
router.put('/', ChannelsController.update);

module.exports = router;
