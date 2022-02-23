const MessagesController = {
    getAll: (req, res) => {
        res.send('will get messages');
    },
    create: (req, res) => {
        res.send('will create message');
    },
    update: (req, res) => {
        res.send('will update nessage', req.id);
    },
    getId: (req, res) => {
        res.send('gets message', req.id);
    },
    delete: (req, res) => {
        res.send('will delete message', req.id);
    }
    
}

module.exports = MessagesController;