const router = require('express').Router();
const GroupsController = require('./group.controller');

router.get('/', GroupsController.getAll);
router.get('/', GroupsController.create);

router.get('/:id', GroupsController.update);
router.get('/:id', GroupsController.getId);
router.get('/:id', GroupsController.delete);


module.exports = router;
