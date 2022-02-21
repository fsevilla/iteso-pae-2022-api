const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const groupRoutes = require('./../modules/group/group.routes');
const messageRoutes = require('./../modules/message/message.routes');
const rolRoutes = require('./../modules/rol/rol.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const userGroupRoute = require('./../modules/user-group/userGroup.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/groups', groupRoutes);
router.use('/messages', messageRoutes);
router.use('/rols', rolRoutes);
router.use('/sessions', sessionRoutes);
router.use('/user-groups', userGroupRoute);

module.exports = router;