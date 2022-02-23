const SessionController = {
    getAll: (req, res) => {
        res.status(200).json([{ session: 'Active' }]);
    },
    create: (req, res) => {
        res.status(200).json({ message: 'Session was created' });
    },
    update: (req, res) => {
        res.status(200).json({ message: 'Session was updated' })
    },
    delete: (req, res) => {
        res.status(200).json({ message: 'Session was deleted' })
    }
}

module.exports = SessionController;