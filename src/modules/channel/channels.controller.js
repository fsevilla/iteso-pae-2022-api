const ChannelsController = {
    getAll: (req, res) => {
        res.send('will get Channel');
    },
    create: (req, res) => {
        res.send("Sala creado");
    },
    update: (req, res) => {
        res.send(`Sala actualizada ${req.id}`);

    },
    delete: (req, res) =>{
        res.send(`Sala eliminada ${req.id}`);
    },
    getId: (req, res) =>{
        res.send(`Sala obtenida por su id ${req.id}`);
    }
}

module.exports = ChannelsController;