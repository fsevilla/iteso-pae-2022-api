const GroupsController = {
    getAll: (req, res) => {
        res.send('will get Groups');
    },
    create: (req, res) => {
        res.send('will create group');
    },
    update: (req, res) => {
        res.send('will update group', req.id);
    },
    getId: (req, res) => {
        res.send('gets group', req.id);
    },
    delete: (req, res) => {
        res.send('will delete group', req.id);
    }

}   

module.exports = GroupsController;