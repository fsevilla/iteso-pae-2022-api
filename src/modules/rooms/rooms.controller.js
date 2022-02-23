const roomContoller = {
    getAll: (req, res) => {
        res.status(200).json([{ room: 'Active', id: '1' }]);
    },
    create: (req, res) => {
        res.status(200).json({ message: 'Room was created' });
    },
    update: (req, res) => {
        res.status(200).json({ message: 'Room was updated' });
    },
    delete: (req, res) => {
        res.status(200).json({ message: 'Room was deleted' });
    }
}

module.exports = roomContoller;