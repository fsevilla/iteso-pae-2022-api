const ChannelsController = {
    getAll: (req, res) => {
        res.send('will get channels');
    },
    create: (req, res) => {
        res.send('Se creará el canal');
    },
    update: (req, res) => {
        res.send('Se actualizará el canal');
    },
    delete: (req,res) => {
        res.send('Se eleiminará el canal');
    } 
}

module.exports = ChannelsController;