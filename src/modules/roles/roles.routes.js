const router = require('express').Router();
const controller = require('./roles.controller');

router.get('/', controller.getAll);
router.put('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
