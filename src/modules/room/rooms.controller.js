const RoomController = {
    getAll: (req, res) => {
        res.send('will get rooms');
    },
    getById: (req, res) => {
        let id = req.params.id;
        if(id != undefined) res.status(200).send('Room with id '+id+' was found');
        else res.status(404).send('Room with id '+id+' was not found');
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        let id = req.params.id; 
        res.send('Room with id '+id+' was updated!');
    },
    delete: (req, res) => {
        let id = req.params.id; //extraemos el id
        res.send('Room with id '+id+' was deleted!');
    },
    patch: (req, res) => {
        let id = req.params.id; //extraemos el id
        res.send('Room with id '+id+' was patched!');
    }
}

module.exports = RoomController;