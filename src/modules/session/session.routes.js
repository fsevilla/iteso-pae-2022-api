
const router = require("express").Router();
const controller = require("./session.controller");

router.get("/", controller.getAll);
router.get("/:id", controller.getId);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;