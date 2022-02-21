const RolController = {
    getAll: (req, res) => {
        res.send('will get rols');
    },
    get: (req, res) => {
        const id = req.params.id;
        res.send(`${id} rol info`);
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        const id = req.params.id;
        res.send(`${id} rol updated`);
    },
    patch: (req, res) => {
        const id = req.params.id;
        res.send(`${id} rol patched`);
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send(`${id} rol deleted`);
    }
}

module.exports = RolController;