const ChannelsController = {
    getAll: (req, res) => {
        res.send('will get channels');
    },
    create: (req, res) => {
        res.send('Will create channel');
    },
    update: (req, res) => {
        res.send('Will update channel');
    },
    delete: (req, res) => {
        res.send('Will delete channel');
    }
}

module.exports = ChannelsController;