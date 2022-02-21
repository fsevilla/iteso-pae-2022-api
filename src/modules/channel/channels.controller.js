const ChannelsController = {
    getAll: (req, res) => {
        res.send('will get channels');
    },
    get: (req, res) => {
        const id = req.params.id;
        res.send(`${id} channel info`);
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        const id = req.params.id;
        res.send(`${id} channel updated`);
    },
    patch: (req, res) => {
        const id = req.params.id;
        res.send(`${id} channel patched`);
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send(`${id} channel deleted`);
    }
}

module.exports = ChannelsController;