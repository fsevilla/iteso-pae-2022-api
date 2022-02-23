const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const userGroupRoutes = require('./../modules/userGroup/userGroup.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const roomsRoutes = require('./../modules/rooms/rooms.routes');
const groupsRoutes = require('./../modules/groups/groups.routes');
const messagesRoutes = require('./../modules/messages/messages.routes');
const rolesRoutes = require('./../modules/roles/roles.routes');


router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/userGroup', userGroupRoutes);
router.use('/sessions', sessionRoutes);
router.use('/rooms', roomsRoutes);
router.use('/groups', groupsRoutes);
router.use('/roles', rolesRoutes);
router.use('/messages', messagesRoutes);

module.exports = router;