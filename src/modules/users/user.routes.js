const router = require('express').Router();
const UsersController = require('./users.controller');

router.get('/', UsersController.getAll);
router.get('/', UsersController.create);

router.get('/:id', UsersController.update);
router.get('/:id', UsersController.getId);
router.get('/:id', UsersController.delete);

module.exports = router;

