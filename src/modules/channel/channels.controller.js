const ChannelsController = {
    getAll: (req, res) => {
        res.send('will get channels');
    },
    create: (req, res) => {
        res.send('will create channel');
    },
    update: (req, res) => {
        res.send('will update channel', req.id);
    },
    getId: (req, res) => {
        res.send('gets channel', req.id);
    },
    delete: (req, res) => {
        res.send('will delete channel', req.id);
    }
}

module.exports = ChannelsController;