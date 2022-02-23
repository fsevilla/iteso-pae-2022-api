const sesionController = {
    getAll: (req, res) => {
        res.send('will get all sesions');
    },
    create: (req, res) => {
        res.send('sesion created');
    },
    update: (req, res) => {
        res.send('sesion updated');
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send('sesion deleted');
    }
}

module.exports = sesionController;