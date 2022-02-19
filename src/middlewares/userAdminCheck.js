module.exports = (req, res, next) => {
    if (req.session.user.rol === 1) {
        next()
    } else {
        res.send('no sos admin')
    }
}