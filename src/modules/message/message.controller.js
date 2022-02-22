const MessageController = {
    getAll: (req, res) => {
        res.send('will get messages');
    },
    create: (req, res) => {
        res.send('will create messages');
    },
    update: (req, res) => {
        res.send('will update messages');
    }
}

module.exports = MessageController;