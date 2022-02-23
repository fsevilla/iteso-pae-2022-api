const UsersGroupController = {
    getAll: (req, res) => {
        res.status(200).json([{user: 'User', group: 'Group'}]);
    },
    create: (req, res) => {
        res.status(200).json({ message: 'User group was created' });
    },
    update: (req, res) => {
        res.status(200).json({ message: 'User group was updated' })
    },
    delete: (req, res) => {
        res.status(200).json({ message: 'User group was deleted' })
    }
}

module.exports = UsersGroupController;