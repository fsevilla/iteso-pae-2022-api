const MessageController = {
    getAll: (req, res) => {
        res.send('will get messages');
    },
    getId: (req, res) => {
        res.send(`Mensaje ${req.idMessage}`);
    },
    create: (req, res) => {
        res.send('Mensaje creado');
    },
    update: (req, res) => {
        res.send(`Mensaje ${req.idMessage}  Actualizado`);
    },
    delete: (req, res) => {
        res.send(`Mensaje ${req.idMessage} Eliminado`);
    }
}

module.exports = MessageController;