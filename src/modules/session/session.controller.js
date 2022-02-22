const SessionController = {
    getAll: (req, res) => {
        res.send('will get Session');
    },
    create: (req, res) => {
        res.send("Sesión creada");
    },
    update: (req, res) => {
        res.send(`Sesión actualizada ${req.id}`);

    },
    delete: (req, res) =>{
        res.send(`Sesión eliminada ${req.id}`);
    },
    getId: (req, res) =>{
        res.send(`Sesión obtenida por su id ${req.id}`);
    }
}

module.exports = SessionController;