const router = require('express').Router();
const UserGroupController = require('./ug.controller');

router.get('/', UserGroupController.getAll);
router.get('/:id', UserGroupController.getId);
router.post('/', UserGroupController.create);
router.delete('/:id', UserGroupController.delete);
router.put('/:id', UserGroupController.update);

module.exports = router;
