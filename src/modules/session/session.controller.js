const sessionController = {
    getAll: (req, res) => {
        res.send('will get session');
    },
    getById: (req, res) => {
        res.send('will get channel by id' + req.params.id);
    },
    create: (req, res) => {
        res.send("Create channel");
    },
    update: (req, res) => {
        res.send( "updated" + req.params.id);
    },
    delete: (req,res) => {
        res.send("deleted" + req.params.id);
    }
}

module.exports = sessionController;