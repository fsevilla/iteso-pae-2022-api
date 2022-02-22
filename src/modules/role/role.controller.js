
const RoleController = {
    getAll: (req, res) => {
      res.send("get role");
    },
    getId: (req, res) => {
      res.send("role ", req.id);
    },
    create: (req, res) => {
      res.send({});
    },
    update: (req, res) => {

    },
    delete: (req, res) => {
      res.send("deleted ", req.id);
    },
  };

  module.exports = RoleController;