const router = require('express').Router();
const GroupController = require('./group.controller');

router.get('/', GroupController.getAll);
router.get('/:id', GroupController.getId);
router.post('/', GroupController.create);
router.delete('/:id', GroupController.delete);
router.put('/:id', GroupController.update);

module.exports = router;
