const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    create: (req, res) => {
        res.send('user created');
    },
    update: (req, res) => {
        res.send('user updated');
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send('user deleted');
    }
}

module.exports = UsersController;