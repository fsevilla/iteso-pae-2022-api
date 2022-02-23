const userGroupController = {
    getAll: (req, res) => {
        res.send('will get all user-groups');
    },
    create: (req, res) => {
        res.status(200).send("Create user-group");
    },
    update: (req, res) => {
        res.send("Update user-group")
    },
    delete: (req, res) => {
        res.send("Delete user-group")
    },
    patch: (req, res) => {
        res.send("Patching")
    }
}

module.exports = userGroupController;