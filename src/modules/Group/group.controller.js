const GroupController = {
    getAll: (req, res) => {
        res.send('will get group');
    },
    create: (req, res) => {
        res.send('Group will create');
    },
    update: (req, res) => {
        res.send('Group will update')
    },
    delete: (req,res) => {
        const id = req.params.id;
        res.send('Group deleted')
    }
}

module.exports = GroupController;