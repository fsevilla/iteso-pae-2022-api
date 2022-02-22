
const SessionController = {
    getAll: (req, res) => {
      res.send("get session");
    },
    getId: (req, res) => {
      res.send("session ", req.id);
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

  module.exports = SessionController;