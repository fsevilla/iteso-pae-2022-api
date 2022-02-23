const groupsController = {
    getAll: (req, res) => {
        res.status(200).json([{ group: 'Gaming 🅱️osses', id: '1' }]);
    },
    create: (req, res) => {
        res.status(200).json({ message: 'Group was created' });
    },
    update: (req, res) => {
        res.status(200).json({ message: 'Group was updated' });
    },
    delete: (req, res) => {
        res.status(200).json({ message: 'Group was deleted' });
    }
}

module.exports = groupsController;