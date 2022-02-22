const GroupsController = {
    getAll: (req, res) => {
        res.send('will get groups');
    },
    create: (req, res) => {
        res.send('Will create group');
    },
    update: (req, res) => {
        res.send('Will update group');
    },
    delete: (req, res) => {
        res.send('Will delete group');
    }
}

module.exports = GroupsController;