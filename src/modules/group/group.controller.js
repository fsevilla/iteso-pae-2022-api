const GroupsController = {
    getAll: (req, res) => {
        res.send('will get groups');
    },
    get: (req, res) => {
        const id = req.params.id;
        res.send(`${id} group info`);
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        const id = req.params.id;
        res.send(`${id} group updated`);
    },
    patch: (req, res) => {
        const id = req.params.id;
        res.send(`${id} group patched`);
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send(`${id} group deleted`);
    }
}

module.exports = GroupsController;