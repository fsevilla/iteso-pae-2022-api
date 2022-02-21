const SessionController = {
    getAll: (req, res) => {
        res.send('will get sessions');
    },
    get: (req, res) => {
        const id = req.params.id;
        res.send(`${id} session info`);
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        const id = req.params.id;
        res.send(`${id} session updated`);
    },
    patch: (req, res) => {
        const id = req.params.id;
        res.send(`${id} session patched`);
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send(`${id} session deleted`);
    }
}

module.exports = SessionController;