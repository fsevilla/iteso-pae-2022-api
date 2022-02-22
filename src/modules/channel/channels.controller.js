const ChannelsController = {
    getAll: (req, res) => {
        res.send('will get channels');
    },
    create: (req, res) => {
        res.send('will create channels');
    },
    update: (req, res) => {
        res.send('will update channels');
    }
}

module.exports = ChannelsController;