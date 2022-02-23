const grupoController = {
    getAll: (req, res) => {
        res.send('aqui estan todos los grupos');
    },
    create: (req, res) => {
        res.send('grupo creado');
    },
    update: (req, res) => {
        res.send('grupo actualizado');
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send('grupo borrado');
    }
}

module.exports = grupoController;