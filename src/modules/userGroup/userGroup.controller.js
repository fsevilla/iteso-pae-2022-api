const UserGroupController = {
    getAll: (req, res) => {
        res.send('will get users-groups');
    },
    create: (req, res) => {
        console.log(req.body);
        res.send('create users-groups endpoint');
    },
    update: (req, res) => {
        res.send('update users-group endpoint');
    }
}

module.exports = UserGroupController;