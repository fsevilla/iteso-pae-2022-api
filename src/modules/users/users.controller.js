const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    create: (req, res) => {
        console.log(req.body);
        res.send('create users endpoint');
    },
    update: (req, res) => {
        res.send('update users endpoint');
    }
}

module.exports = UsersController;