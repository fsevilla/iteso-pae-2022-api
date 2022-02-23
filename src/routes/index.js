const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/group', channelRoutes);
router.use('/message', channelRoutes);
router.use('/role', channelRoutes);
router.use('/session', channelRoutes);
router.use('/user-group', channelRoutes);

module.exports = router;