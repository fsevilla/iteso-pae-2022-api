const RoomsController = {
    getAll: (req, res) => {
        res.send('Will get rooms');
    },
    getOne: (req, res) => {
        res.send('Will get "' + req.params.id + '" room');
    },
    create: (req, res) => {
        res.send('Will create room');
    },
    update: (req, res) => {
        res.send('Will update room');
    },
    delete: (req, res) => {
        res.send('Will delete room');
    }
}

module.exports = RoomsController;