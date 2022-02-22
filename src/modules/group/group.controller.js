const GroupController = {
    getAll: (req, res) => {
        res.send('will get Group');
    },
    create: (req, res) => {
        res.send("Grupo creado");
    },
    update: (req, res) => {
        res.send(`Grupo actualizado ${req.id}`);

    },
    delete: (req, res) =>{
        res.send(`Grupo eliminado ${req.id}`);
    },
    getId: (req, res) =>{
        res.send(`Grupo obtenido por su id ${req.id}`);
    }
}

module.exports = GroupController;