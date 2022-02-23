const MensajeController = {
    getAll: (req, res) => {
        res.send('will get Mensaje');
    },
    create: (req, res) => {
        res.send('Mensaje will create');
    },
    update: (req, res) => {
        res.send('Mensaje will update');
    },
    delete: (req,res) => {
        const id = req.params.id;
        res.send('Mensaje deleted')
    }
}

module.exports = MensajeController;