function userAdminCheck(req, res, next) {
    if(req.session.user){
        if(req.session.user.rol === "ROL_ADMIN"){
            next()
        }else{
            res.send('tomatela te dije')
        }
    }
}
module.exports = userAdminCheck