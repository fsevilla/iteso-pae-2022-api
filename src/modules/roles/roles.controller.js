const rolesController = {
    getAll: (req, res) => {
        res.status(200).json([{ role: 'ADMIN', id: '1' }]);
    },
    create: (req, res) => {
        res.status(200).json({ message: 'Role was created' });
    },
    update: (req, res) => {
        res.status(200).json({ message: 'Role was updated' });
    },
    delete: (req, res) => {
        res.status(200).json({ message: 'Role was deleted' });
    }
}

module.exports = rolesController;