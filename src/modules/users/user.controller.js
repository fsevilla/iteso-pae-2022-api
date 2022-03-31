const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    getId: (req, res) => {
        res.send(`Usuario ${req.idUser}`);
    },
    create: (req, res) => {
        res.send('Usuario creado');
    },
    update: (req, res) => {
        res.send(`Usuario ${req.idUser}  Actualizado`);
    },
    delete: (req, res) => {
        res.send(`Usuario ${req.idUser} Eliminado`);
    }
}
    
module.exports = UsersController;