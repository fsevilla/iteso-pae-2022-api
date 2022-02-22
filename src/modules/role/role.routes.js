const router = require('express').Router();
const RoleController = require('./role.controller');

router.get('/', RoleController.getAll);
router.get('/:id', RoleController.getId);
router.post('/', RoleController.create);
router.delete('/:id', RoleController.delete);
router.put('/:id', RoleController.update);

module.exports = router;
