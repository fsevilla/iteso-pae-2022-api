const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    create: (req, res) => {
        res.send('will create user');
    },
    update: (req, res) => {
        res.send('will update user', req.id);
    },
    getId: (req, res) => {
        res.send('gets user', req.id);
    },
    delete: (req, res) => {
        res.send('will delete user', req.id);
    }
}

module.exports = UsersController;