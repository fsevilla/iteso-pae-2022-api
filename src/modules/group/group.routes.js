const router = require('express').Router();
const controller = require('./group.controller');

router.get('/', controller.getAll);
router.create('/',controller.create);
router.update('/',controller.update);
router.delete('/',controller.delete)

module.exports = router;

