const router = require('express').Router();
const userGroup = require('./message.user-group');

router.get('/', userGroup.getAll);

module.exports = router;