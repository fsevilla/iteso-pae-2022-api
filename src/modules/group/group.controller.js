const GroupController = {
  getAll: (req, res) => {
    res.send("will get group");
  },
  getId: (req, res) => {
    res.send("group: ", req.id);
  },
  create: (req, res) => {
    res.send({});
  },
  update: (req, res) => {},
  delete: (req, res) => {
    res.send("group deleted: ", req.id);
  },
};

module.exports = GroupController;
