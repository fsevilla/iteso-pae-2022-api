const groupController = {
    getAll: (req, res) => {
        res.send('will get group');
    },
    create: (req, res) => {
        res.send('Se creará el grupo');
    },
    update: (req, res) => {
        res.send('Se actualizara el grupo');
    },
    delete: (req,res) => {
        res.send('Se eleiminará el grupo');
    } 
}

module.exports = groupController;