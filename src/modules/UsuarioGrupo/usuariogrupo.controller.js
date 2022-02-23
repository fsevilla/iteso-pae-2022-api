const UsuarioGrupoController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    create: (req, res) => {
        res.send('Will create UsuarioGrupo');
    },
    update: (req, res) => {
        res.send('Will update UsuarioGrupo')
    },
    delete: (req,res) => {
        const id = req.params.id;
        res.send('UsuarioGrupo deleted')
    }
}

module.exports = UsuarioGrupoController;