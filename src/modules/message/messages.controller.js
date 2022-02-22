const MessagesController = {
    getAll: (req, res) => {
        res.send('will get messages');
    },
    create: (req, res) => {
        res.send('Will create message');
    },
    update: (req, res) => {
        res.send('Will update message');
    },
    delete: (req, res) => {
        res.send('Will delete message');
    }
}

module.exports = MessagesController;