const UserGroupController = {
    getAll: (req, res) => {
      res.send("get user group");
    },
    getId: (req, res) => {
      res.send("user group ", req.id);
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

  module.exports = UserGroupController;