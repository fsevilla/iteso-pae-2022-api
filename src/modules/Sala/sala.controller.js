const salaController = {
    getAll: (req, res) => {
        res.send('will get all channels');
    },
    create: (req, res) => {
        res.send('sala creada');
    },
    update: (req, res) => {
        res.send('sala actualizada');
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send('sala borrada');
    }
}

module.exports = salaController;