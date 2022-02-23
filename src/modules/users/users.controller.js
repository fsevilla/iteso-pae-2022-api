const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    getById: (req, res) => {
        res.send('will get user by id' + req.params.id);
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {      
        res.send( "updated" + req.params.id);
    },
    delete: (req,res) => {
        res.send("deleted" + req.params.id);
    }};
    
module.exports = UsersController;