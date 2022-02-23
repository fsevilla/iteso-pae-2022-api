const router = require('express').Router();
const controller = require('./usersgroup.controller');

router.get('/', controller.getAll);
router.create('/',controller.create);
router.update('/',controller.update);
router.delete('/',controller.delete)

module.exports = router;

