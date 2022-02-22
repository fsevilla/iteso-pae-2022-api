const RoomController = {
    getAll: (req, res) => {
        res.send('will get rooms');
    },
    create: (req, res) => {
        res.send('will create rooms');
    },
    update: (req, res) => {
        res.send('will update rooms');
    }
}

module.exports = RoomController;