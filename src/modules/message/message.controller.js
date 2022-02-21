const MessageController = {
    getAll: (req, res) => {
        res.send('will get messages');
    },
    get: (req, res) => {
        const id = req.params.id;
        res.send(`${id} message info`);
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        const id = req.params.id;
        res.send(`${id} message updated`);
    },
    patch: (req, res) => {
        const id = req.params.id;
        res.send(`${id} message patched`);
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send(`${id} message deleted`);
    }
}

module.exports = MessageController;