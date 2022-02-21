const RoomController = {
    getAll: (req, res) => {
        res.send('will get rooms');
    },
    getId: (req, res) => {
        res.send(`Cuarto ${req.idRoom}`);
    },
    create: (req, res) => {
        res.send('Cuarto creado');
    },
    update: (req, res) => {
        res.send(`Cuarto ${req.idRoom}  Actualizado`);
    },
    delete: (req, res) => {
        res.send(`Cuarto ${req.idRoom} Eliminado`);
    }
}

module.exports = RoomController;