const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    create: (req, res) => {
        res.send("Usuario creado");
    },
    update: (req, res) => {
        res.send(`Usuario actualizado ${req.id}`);

    },
    delete: (req, res) =>{
        res.send(`Usuario eliminado ${req.id}`);
    },
    getId: (req, res) =>{
        res.send(`Usuario obtenido por su id ${req.id}`);
    }
}

module.exports = UsersController;