const UsersGroupController = {
    getAll: (req, res) => {
        res.send('will get user groups');
    },
    create: (req, res) => {
        res.send('Se creará el grupo de usuarios');
    },
    update: (req, res) => {
        res.send('Se va a actualizar el grupo de usuarios');
    },
    delete: (req,res) => {
        res.send('Se borrará el grupo de usuarios');
    } 
}

module.exports = UsersGroupController;