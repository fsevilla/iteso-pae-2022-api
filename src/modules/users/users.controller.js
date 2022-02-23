const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    getById: (req, res) => {
        let id = req.params.id;
        if(id != undefined) res.status(200).send('User with id '+id+' was found');
        else res.status(404).send('User with id '+id+' was not found');
    },
    create: (req, res) => {
        res.status(200).send({});
    },
    update: (req, res) => {
        let id = req.params.id;
        if(id != undefined) res.status(200).send('User with id '+id+' was updated');
        else res.status(404).send('User with id '+id+' was not found');
        //res.send({});
    },
    delete: (req, res) => {
        let id = req.params.id; //extraemos el id
        if(id != undefined) res.status(200).send('User with id '+id+' was deleted');
        else res.status(404).send('User with id '+id+' was not found');
    },
    patch: (req, res) => {
        let id = req.params.id; //extraemos el id
        res.send('User with id '+id+' was patched!');
    }
}

module.exports = UsersController;