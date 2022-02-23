const { getById } = require("./channels.controller");

const messagesController = {
    getAll: (req, res) => {
        res.send("will get all messages");
    },

    getById: (req, res) => {
        res.send("will get room by id" + req.params.id);
    },

    create: (req, res) => {
        res.send("Create room");
    },

    update: (req, res) => {
        res.send("updated" + req.params.id);
    },

    delete: (req, res) => {
        res.send("deleted" + req.params.id);
    }
}

module.exports = messagesController;