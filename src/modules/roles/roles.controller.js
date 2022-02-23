const { getById } = require("./channels.controller");

const RolesController = {
    getAll: (req, res) => {
        res.send("will get all roles");
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

module.exports = rolesController;