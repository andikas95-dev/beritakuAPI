const jwt = require('express-jwt')

exports.authenticated = (req, res, next) => {
    if (jwt({ secret: 'my-secret-key' })) {
        next()
    } else {
        res.send({
            message: "You are Unauthenticated!"
        })
    }
}