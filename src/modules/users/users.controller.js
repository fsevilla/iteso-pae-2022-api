const UsersController = {
    getAll: (req, res) => {
        res.send('Will get users');
    },
    getOne: (req, res) => {
        res.send('Will get "' + req.params.id + '" user');
    },
    create: (req, res) => {
        res.send('Will create user');
    },
    update: (req, res) => {
        res.send('Will update user');
    },
    delete: (req, res) => {
        res.send('Will delete user');
    }
}

module.exports = UsersController;