const messagesController = {
    getAll: (req, res) => {
        res.status(200).json([{ message: 'Hey!', id: '1' }]);
    },
    create: (req, res) => {
        res.status(200).json({ message: 'Message was created' });
    },
    update: (req, res) => {
        res.status(200).json({ message: 'Message was updated' });
    },
    delete: (req, res) => {
        res.status(200).json({ message: 'Message was deleted' });
    }
}

module.exports = messagesController;