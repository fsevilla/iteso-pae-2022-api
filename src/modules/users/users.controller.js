const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    create: (req, res) => {
        res.send('Se creará el usuario');
    },
    update: (req, res) => {
        res.send('Se va a actualizar el usuario');
    },
    delete: (req,res) => {
        res.send('Se borrará el usuario');
    } 
}

module.exports = UsersController;