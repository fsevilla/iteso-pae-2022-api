const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const groupRoutes = require('./../modules/group/group.routes');
const roomRoutes = require('./../modules/room/room.routes');
const messageRoutes = require('./../modules/message/message.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const roleRoutes = require('./../modules/role/role.routes');
const usergroupRoutes = require('./../modules/usergroup/usergroup.routes');



router.use('/groups', groupRoutes);
router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);
router.use('/session', sessionRoutes);
router.use('/roles', roleRoutes);
router.use('/usergroup', usergroupRoutes);





module.exports = router;