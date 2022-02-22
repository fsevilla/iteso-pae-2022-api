const RoomsController = {
    getAll: (req, res) => {
        res.send('will get rooms');
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