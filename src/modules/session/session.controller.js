const SessionsController = {
    getAll: (req, res) => {
        res.send('will get sessions');
    },
    create: (req, res) => {
        res.send('Will create session');
    },
    update: (req, res) => {
        res.send('Will update session');
    },
    delete: (req, res) => {
        res.send('Will delete session');
    }
}

module.exports = SessionsController;