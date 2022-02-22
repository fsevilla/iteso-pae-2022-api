const RolesController = {
    getAll: (req, res) => {
        res.send('will get roles');
    },
    create: (req, res) => {
        res.send('Will create role');
    },
    update: (req, res) => {
        res.send('Will update role');
    },
    delete: (req, res) => {
        res.send('Will delete role');
    }
}

module.exports = RolesController;