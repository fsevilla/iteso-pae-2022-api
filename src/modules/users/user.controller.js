const UserController = {
    getAll: (req, res) => {
        res.send('will get all users');
    },
    create: (req, res) => {
        res.status(200).send("Create user");
    },
    update: (req, res) => {
        res.send("Update user")
    },
    delete: (req, res) => {
        res.send("Delete user")
    },
    patch: (req, res) => {
        res.send("Patching")
    }
}

module.exports = UserController;