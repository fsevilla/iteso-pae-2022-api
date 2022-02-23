const mensajeController = {
    getAll: (req, res) => {
        res.send('aqui estan todos los mensajes');
    },
    create: (req, res) => {
        res.send('mensaje creado');
    },
    update: (req, res) => {
        res.send('mensaje actualizado');
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send('mensaje borrado');
    }
}

module.exports = mensajeController;