const MessageController = {
    getAll: (req, res) => {
      res.send("will get messages");
    },
    getId: (req, res) => {
      res.send("message: ", req.id);
    },
    create: (req, res) => {
      res.send({});
    },
    update: (req, res) => {},
    delete: (req, res) => {
      res.send("message deleted: ", req.id);
    },
  };
  
  module.exports = MessageController;
  