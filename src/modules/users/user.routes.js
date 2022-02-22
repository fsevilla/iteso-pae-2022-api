const router = require('express').Router();
const controller = require('./users.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getId);
router.post('/', controller.create);
router.delete('/:id', controller.delete);
router.put('/:id', controller.update);

module.exports = router;