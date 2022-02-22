const SessionController = {
    getAll: (req, res) => {
        res.send('will get session');
    },
    create: (req, res) => {
        res.send('will create session');
    },
    update: (req, res) => {
        res.send('will update session');
    }
}

module.exports = SessionController;