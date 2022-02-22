const router = require('express').Router();
const GroupsController = require('./Groups.controller');

router.get('/', GroupsController.getAll);
router.put('/', GroupsController.update);
router.post('/', GroupsController.create);
router.delete('/', GroupsController.delete);


module.exports = router;
