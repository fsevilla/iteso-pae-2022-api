const messageController = {
    getAll: (req, res) => {
        res.send('will get all messages');
    },
    create: (req, res) => {
        res.status(200).send("Create message");
    },
    update: (req, res) => {
        res.send("Update message")
    },
    delete: (req, res) => {
        res.send("Delete message")
    },
    patch: (req, res) => {
        res.send("Patching")
    }
}

module.exports = messageController;