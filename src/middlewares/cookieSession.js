function cookieSession (req, res, next)  {
    if(req.cookies.userElectroHogar){
        req.session.user = req.cookies.userElectroHogar
        res.locals.user = req.session.user
    }
    next()
}

module.exports = cookieSession