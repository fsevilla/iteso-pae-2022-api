const router = require('express').Router();
const ChannelsController = require('./channels.controller');

router.get('/', Channelscontroller.getAll);
router.create('/',Channelscontroller.create);
router.update('/',Channelscontroller.update);
router.delete('/',Channelscontroller.delete)


module.exports = router;
