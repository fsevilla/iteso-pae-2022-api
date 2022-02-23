const router = require('express').Router();
const RoleController = require('./roles.controller');

router.get('/', RoleController.getAll);
router.get('/:id', RoleController.getById);
router.post('/', RoleController.create);
router.put('/:id', RoleController.update);
router.delete('/:id', RoleController.delete);
router.patch('/:id', RoleController.patch);

module.exports = router;
