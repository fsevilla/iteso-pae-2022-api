const MessageController = {
    getAll: (req, res) => {
        res.send('will get Message');
    },
    create: (req, res) => {
        res.send("Mensaje creado");
    },
    update: (req, res) => {
        res.send(`Mensaje actualizado ${req.id}`);

    },
    delete: (req, res) =>{
        res.send(`Mensaje eliminado ${req.id}`);
    },
    getId: (req, res) =>{
        res.send(`Mensaje obtenido por su id ${req.id}`);
    }
}

module.exports = MessageController;