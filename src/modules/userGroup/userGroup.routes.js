const router = require('express').Router();
const UserGroupsController = require('./userGroup.controller');

router.get('/', UserGroupsController.getAll);
router.get('/', UserGroupsController.create);

router.get('/:id', UserGroupsController.update);
router.get('/:id', UserGroupsController.getId);
router.get('/:id', UserGroupsController.delete);

module.exports = router;
