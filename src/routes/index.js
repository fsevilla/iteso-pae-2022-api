
const router = require("express").Router();

const userRoutes = require("./../modules/users/user.routes");
const channelRoutes = require("./../modules/channel/channel.routes");
const groupRoutes = require("./../modules/group/group.routes");
const messageRoutes = require("./../modules/message/message.routes");
const roleRoutes = require("./../modules/role/role.routes");
const sessionRoutes = require("./../modules/session/session.routes");
const userGroupRoutes = require("./../modules/usergroup/user.group.routes");

router.use("/users", userRoutes);
router.use("/channels", channelRoutes);
router.use("/groups", groupRoutes);
router.use("/messages", messageRoutes);
router.use("/roles", roleRoutes);
router.use("/sessions", sessionRoutes);
router.use("/usergroup", userGroupRoutes);

module.exports = router;