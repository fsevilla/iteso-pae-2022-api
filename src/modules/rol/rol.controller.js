const rolController = {
    getAll: (req, res) => {
        res.send('will get rol');
    },
    create: (req, res) => {
        res.send('Se creara el nuevo rol');
    },
    update: (req, res) => {
        res.send('Se actualizara el rol');
    },
    delete: (req,res) => {
        res.send('Se eleiminará el rol');
    } 
}

module.exports = rolController;