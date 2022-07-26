const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const messageRoutes = require('./../modules/message/message.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/message', messageRoutes);

module.exports = router;