const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const roomRoutes = require('./../modules/room/room.routes');
const roleRoutes = require('./../modules/role/role.routes');
const messageRoutes = require('./../modules/message/message.routes');
const groupUserRoutes = require('./../modules/groupUser/groupUser.routes');
const groupRoutes = require('./../modules/group/group.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/sessions', sessionRoutes);
router.use('/rooms', roomRoutes);
router.use('/roles', roleRoutes);
router.use('/messages', messageRoutes);
router.use('/groupUsers', groupUserRoutes);
router.use('/groups', groupRoutes);

module.exports = router;