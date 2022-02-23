const SalaController = {
    getAll: (req, res) => {
        res.send('will get Sala');
    },
    create: (req, res) => {
        res.send('Sala will create');
    },
    update: (req, res) => {
        res.send('Sala will update');
    },
    delete: (req,res) => {
        const id = req.params.id;
        res.send('Sala deleted')
    }
}

module.exports = SalaController;