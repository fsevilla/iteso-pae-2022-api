const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const messageRoutes = require('./../modules/messages/messages.routes');
const roleRoutes = require('./../modules/roles/roles.routes');
const roomRoutes = require('./../modules/rooms/rooms.routes');
const sessionRoutes = require('./../modules/sessions/sessions.routes');
const userGroupRoutes = require('./../modules/user_groups/userGroups.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/messages', messageRoutes);
router.use('/roles', roleRoutes);
router.use('/rooms', roomRoutes);
router.use('/sessions', sessionRoutes);
router.use('/userGroups', userGroupRoutes);

module.exports = router;