const UserGroupController = {
    getAll: (req, res) => {
        res.send('will get Usergroup');
    },
    create: (req, res) => {
        res.send("Usuario en grupo creado");
    },
    update: (req, res) => {
        res.send(`Usuario en grupo actualizado ${req.id}`);

    },
    delete: (req, res) =>{
        res.send(`Usuario en grupo eliminado ${req.id}`);
    },
    getId: (req, res) =>{
        res.send(`Usuario en grupo obtenido por su id ${req.id}`);
    }
}

module.exports = UserGroupController;