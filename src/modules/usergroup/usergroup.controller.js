const UserGroupController = {
    getAll: (req, res) => {
        res.send('will get user groupss');
    },
    create: (req, res) => {
        res.send('Will create user groups');
    },
    update: (req, res) => {
        res.send('Will update user groups');
    },
    delete: (req, res) => {
        res.send('Will delete user groups');
    }
}

module.exports = UserGroupController;