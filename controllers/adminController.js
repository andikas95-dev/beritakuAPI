const models = require('../models')
const Users = models.user
const Roles = models.role
const Newsletters = models.newsletter


exports.index = (req, res) => {
    Users.findAll({
        attributes: ['id', 'username'],
        include: [
            {
                model: Roles,
                attributes: ['role_name']
            }
        ]
    })
        .then(result => res.send(result))
        .catch(err => res.send({ message: 'error' }))
}

exports.createUser = (req, res) => {
    var { username, password, id_role } = req.body;
    Users.findOrCreate({
        where: { username },
        defaults: {
            username: username,
            password: password,
            id_role: id_role,
            createdAt: new Date(),
            updateAt: new Date()
        },
    }).then(result => res.send({
        username,
        id_role,
    }))
        .catch(err => res.send({
            err,
            message: 'Tidak Berhasil Ditambahkan'
        }))
}

exports.updateNewsletterAdmin = (req, res) => {
    var { title, content, file } = req.body
    var { id_newsletter } = req.params

    const data = {
        title,
        content,
        file
    }
    Newsletters.update(data, {
        where: { id: id_newsletter }
    })
        .then(result => res.send({
            result,
            message: 'Data Berhasil Dirubah'
        }))
        .catch(err => res.send({
            err,
            message: 'Data Gagal Dirubah'
        }))
}

exports.deleteNewsletterAdmin = (req, res) => {
    var { id_newsletter } = req.params

    Newsletters.destroy({
        where: { id: id_newsletter }
    })
        .then(result => res.send({
            message: 'berhasil di Hapus',
            result
        }))
        .catch(err => res.send(err))
}