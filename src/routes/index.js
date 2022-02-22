const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const userGroupRoutes = require('./../modules/userGroup/userGroup.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const rollRoutes = require('./../modules/roll/roll.routes');
const roomRoutes = require('./../modules/room/room.routes');
const messageRoutes = require('./../modules/message/message.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/userGroup', userGroupRoutes);
router.use('/sessions', sessionRoutes);
router.use('/rolls', rollRoutes);
router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);

module.exports = router;