const router = require('express').Router();
const controller = require('./sala.controller');

router.get('/', controller.getAll);
router.delete("/:id", controller.delete);
router.put('/', controller.update);
router.post('/', controller.create);

module.exports = router;