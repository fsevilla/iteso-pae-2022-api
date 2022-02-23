const RolesController = {
    getAll: (req, res) => {
        res.send('will get roles');
    },
    create: (req, res) => {
        res.send('will create role');
    },
    update: (req, res) => {
        res.send('will update role', req.id);
    },
    getId: (req, res) => {
        res.send('gets role', req.id);
    },
    delete: (req, res) => {
        res.send('will delete role', req.id);
    }
}

module.exports = RolesController;