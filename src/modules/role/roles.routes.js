const router = require('express').Router();
const RolesController = require('./role.controller');

router.get('/', RolesController.getAll);
router.get('/', RolesController.create);

router.get('/:id', RolesController.update);
router.get('/:id', RolesController.getId);
router.get('/:id', RolesController.delete);


module.exports = router;
