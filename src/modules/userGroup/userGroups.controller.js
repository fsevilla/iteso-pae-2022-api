const UsersGroupsController = {
    getAll: (req, res) => {
        res.send('will get users groups');
    },
    getById: (req, res) => {
        let id = req.params.id;
        if(id != undefined) res.status(200).send('User Group with id '+id+' was found');
        else res.status(404).send('User Group with id '+id+' was not found');
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        let id = req.params.id; 
        res.send('User Group with id '+id+' was updated!');
    },
    delete: (req, res) => {
        let id = req.params.id; //extraemos el id
        res.send('User Group with id '+id+' was deleted!');
    },
    patch: (req, res) => {
        let id = req.params.id; //extraemos el id
        res.send('User Group with id '+id+' was patched!');
    }
}

module.exports = UsersGroupsController;