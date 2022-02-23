const SessionsController = {
    getAll: (req, res) => {
        res.send('will get sessions');
    },
    create: (req, res) => {
        res.send('will create session');
    },
    update: (req, res) => {
        res.send('will update session', req.id);
    },
    getId: (req, res) => {
        res.send('gets session', req.id);
    },
    delete: (req, res) => {
        res.send('will delete session', req.id);
    }
}

module.exports = SessionsController;