const RollsController = {
    getAll: (req, res) => {
        res.send('will get rolls');
    },
    create: (req, res) => {
        res.send('will create rolls');
    },
    update: (req, res) => {
        res.send('will update rolls');
    }
}

module.exports = RollsController;