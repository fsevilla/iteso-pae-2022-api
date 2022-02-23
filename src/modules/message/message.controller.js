const messageController = {
    getAll: (req, res) => {
        res.send('will get messages');
    },
    create: (req, res) => {
        res.send('Se creará el mensaje');
    },
    update: (req, res) => {
        res.send('Se editará el mensaje');
    },
    delete: (req,res) => {
        res.send('Se eleiminará el mensaje');
    } 
}

module.exports = messageController;