const UsersGrupoController = {
    getAll: (req, res) => {
        res.send('will get users group');
    },
    create: (req, res) => {
        res.send('users group created');
    },
    update: (req, res) => {
        res.send('users group updated');
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send('users group deleted');
    }
}

module.exports = UsersGrupoController;