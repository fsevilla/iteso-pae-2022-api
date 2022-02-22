const RoleController = {
    getAll: (req, res) => {
        res.send('will get Role');
    },
    create: (req, res) => {
        res.send("Rol creado");
    },
    update: (req, res) => {
        res.send(`Rol actualizado ${req.id}`);

    },
    delete: (req, res) =>{
        res.send(`Rol eliminado ${req.id}`);
    },
    getId: (req, res) =>{
        res.send(`Rol obtenido por su id ${req.id}`);
    }
}

module.exports = RoleController;