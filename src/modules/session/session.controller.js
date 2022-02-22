const SessionController = {
    getAll: (req, res) => {
      res.send("will get session");
    },
    getId: (req, res) => {
      res.send("session: ", req.id);
    },
    create: (req, res) => {
      res.send({});
    },
    update: (req, res) => {},
    delete: (req, res) => {
      res.send("session deleted: ", req.id);
    },
  };
  
  module.exports = SessionController;
  