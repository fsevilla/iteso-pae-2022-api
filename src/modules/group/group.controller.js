const GroupController = {
    getAll: (req, res) => {
        res.send('will get all groups');
    },
    create: (req, res) => {
        res.status(200).send("Create group");
    },
    update: (req, res) => {
        res.send("Update group")
    },
    delete: (req, res) => {
        res.send("Delete group")
    },
    patch: (req, res) => {
        res.send("Patching")
    }
}

module.exports = GroupController;