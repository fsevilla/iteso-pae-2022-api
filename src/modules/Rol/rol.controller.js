const rolController = {
    getAll: (req, res) => {
        res.send('aqui estan todos los rols');
    },
    create: (req, res) => {
        res.send('rol creado');
    },
    update: (req, res) => {
        res.send('rol actualizado');
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send('rol borrado');
    }
}

module.exports = rolController;