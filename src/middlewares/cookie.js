function cookie (req, res, next) {
    if(req.cookies.userElectrogar){
        req.session.user = req.cookies.userElectrogar; 
        res.locals.user = req.session.user; 
    }
    next()
}

module.exports = cookie;