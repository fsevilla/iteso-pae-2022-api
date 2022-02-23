const UserGroupsController = {
    getAll: (req, res) => {
        res.send('will get user groups');
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        res.send('will update user group', req.id);
    },
    getId: (req, res) => {
        res.send('gets user group', req.id);
    },
    delete: (req, res) => {
        res.send('will delete user group', req.id);
    }
}

module.exports = UserGroupsController;