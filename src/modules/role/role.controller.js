const roleController = {
    getAll: (req, res) => {
        res.send('will get all roles');
    },
    create: (req, res) => {
        res.status(200).send("Create role");
    },
    update: (req, res) => {
        res.send("Update role")
    },
    delete: (req, res) => {
        res.send("Delete role")
    },
    patch: (req, res) => {
        res.send("Patching")
    }
}

module.exports = roleController;