const router = require('express').Router();
const controller = require('./messages.controller');

router.get('/', controller.getAll);
router.get('/', controller.getAll);
router.put('/', controller.update);
router.post('/', controller.create);
router.delete('/', controller.delete);

module.exports = router;

