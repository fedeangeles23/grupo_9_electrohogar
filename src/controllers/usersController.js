const controller = {
    login: (req, res) =>{
        res.render('users/login')
    },
    

    registro: (req, res) =>{
        res.render('users/registro')
    },

    perfil: (req, res) => {
        res.render('users/perfil')
    }

}

module.exports = controller