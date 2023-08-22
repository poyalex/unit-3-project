// Hey i have a token in the header
// I need to verify if this token is valid
// If its valid i need to set the loggedin user for 
// req, res cycle

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.get('Authorization') || req.query.token
    if(token){
        token = token.replace('Bearer ', '');
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
        })
        return next()
    } else {
        req.user = null 
        return next()
    }
}