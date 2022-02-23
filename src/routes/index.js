const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const messagesRoutes = require('../modules/message/message.routes');
const rolesRoutes = require('./../modules/role/role.routes');
const roomsRoutes = require('./../modules/room/room.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const userGroupsRoutes = require('./../modules/userGroup/userGroup.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/messages', messagesRoutes);
router.use('/roles', rolesRoutes);
router.use('/rooms', roomsRoutes);
router.use('/sessions', sessionRoutes);
router.use('/usersGroups', userGroupsRoutes);

module.exports = router;