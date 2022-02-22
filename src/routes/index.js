const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const groupRoutes = require('./../modules/group/group.routes');
const messageRoutes = require('./../modules/message/message.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const roleRoutes = require('./../modules/role/role.routes');
const ugRoutes = require('./../modules/usergroup/ug.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/group', groupRoutes);
router.use('/message', messageRoutes);
router.use('/session', sessionRoutes);
router.use('/role', roleRoutes);
router.use('/usergroup', ugRoutes);

module.exports = router;