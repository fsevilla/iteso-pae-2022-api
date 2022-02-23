const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const roleRoutes = require('./../modules/roles/role.routes');
const messageRoutes = require('./../modules/messages/message.routes');
const roomRoutes = require('./../modules/rooms/room.routes');
const sessionRoutes = require('./../modules/sessions/session.routes');
const groupsRoutes = require('./../modules/groups/group.routes');




router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/roles', roleRoutes);
router.use('/messages', messageRoutes);
router.use('/rooms', roomRoutes);
router.use('/sessions', sessionRoutes);
router.use('/groups', groupsRoutes);


module.exports = router;