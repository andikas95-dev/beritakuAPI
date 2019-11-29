const jwt = require('jsonwebtoken');
const models = require('../models');
const Users = models.user

exports.login = (req, res) => {
    const { username, password } = req.body

    Users.findOne({
        where: { username, password }
    })
        .then(user => {
            if (user) {
                const token = jwt.sign({ id: user.id, id_role: user.id_role }, 'my-secret-key')
                res.send({
                    username: user.username,
                    token
                })
            } else {
                res.send({
                    message: 'Maaf Gagal'
                })
            }
        })
        .catch(err => res.send(err))
}