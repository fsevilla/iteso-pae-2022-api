const RolController = {
    getAll: (req, res) => {
        res.send('will get Rol');
    },
    create: (req, res) => {
        res.send('Rol will create');
    },
    update: (req, res) => {
        res.send('Rol will update');
    },
    delete: (req,res) => {
        const id = req.params.id;
        res.send('Rol deleted')
    }
}

module.exports = RolController;