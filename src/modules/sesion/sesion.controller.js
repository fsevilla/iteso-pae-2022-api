const sesionController = {
    getAll: (req, res) => {
        res.send('will get sesion');
    },
    create: (req, res) => {
        res.send('Se creará la sesion');
    },
    update: (req, res) => {
        res.send('Se actualizara la sesion');
    },
    delete: (req,res) => {
        res.send('Se eleiminará la sesion');
    } 
}

module.exports = sesionController;