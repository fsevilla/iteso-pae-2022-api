const router = require('express').Router();
const controller = require('./users.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.patch('/:id', controller.patch);

module.exports = router;

