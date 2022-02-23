const SesionController = {
    getAll: (req, res) => {
        res.send('will get Sesion');
    },
    create: (req, res) => {
        res.send('Sesion will create');
    },
    update: (req, res) => {
        res.send('Sesion will update');
    },
    delete: (req,res) => {
        const id = req.params.id;
        res.send('Sesion deleted')
    }
}

module.exports = SesionController;