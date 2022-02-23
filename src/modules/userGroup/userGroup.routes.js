const router = require('express').Router();
const UsersGroupsController = require('./userGroups.controller');

router.get('/', UsersGroupsController.getAll);
router.get('/:id', UsersGroupsController.getById);
router.post('/', UsersGroupsController.create);
router.put('/:id', UsersGroupsController.update);
router.delete('/:id', UsersGroupsController.delete);
router.patch('/:id', UsersGroupsController.patch);

module.exports = router;

