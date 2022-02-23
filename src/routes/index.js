const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const usersGroupRoutes = require('./../modules/UserGroup/usersgroup.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const sesionRoutes = require('./../modules/sesion/sesion.routes');
const rolRoutes = require('./../modules/rol/rol.routes');
const messageRoutes = require('./../modules/message/message.routes');
const groupRoutes = require('./../modules/group/group.routes');



router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/UserGroup',usersGroupRoutes);
router.use('/sesion',sesionRoutes);
router.use('/sesion',rolRoutes);
router.use('/sesion',messageRoutes);
router.use('/sesion',groupRoutes);

module.exports = router;