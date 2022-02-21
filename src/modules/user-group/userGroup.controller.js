const UserGroupsController = {
    getAll: (req, res) => {
        res.send('will get user groups');
    },
    get: (req, res) => {
        const id = req.params.id;
        res.send(`${id} user group info`);
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        const id = req.params.id;
        res.send(`${id} user group updated`);
    },
    patch: (req, res) => {
        const id = req.params.id;
        res.send(`${id} user group patched`);
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send(`${id} user group deleted`);
    }
}

module.exports = UserGroupsController;