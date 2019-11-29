const models = require('../models')
const ShareLogs = models.sharelog
const Newsletters = models.newsletter
const Users = models.user
const Share_Media = models.share_media

exports.index = (req, res) => {
    ShareLogs.findAll({
        include: [
            {
                model: Users,
                attributes: ['username']
            },
            {
                model: Newsletters,
                attributes: ['title']
            },
            {
                model: Share_Media,
                attributes: ['media_social']
            }
        ]
    })
        .then(result => res.send({ result }))
        .catch(err => res.send(err))
}

exports.indexForAdmin = (req, res) => {
    ShareLogs.findAll({
        where: { id_role: 3 }
    })
        .then(result => res.send(result))
        .catch(err => res.send(err))
}

exports.createShareLog = (req, res) => {
    var id_newsletter = Number(req.params.id_newsletter)
    var id_user = Number(req.params.id_user)
    var { id_media_social } = req.body
    Math.floor(id_user)
    Math.floor(id_newsletter)
    ShareLogs.create({
        id_user,
        id_newsletter,
        id_media_social
    })
        .then(result => res.send({
            message: 'Data Berhasil Dibuat',
            result
        }))
        .catch(err => res.send(err))
}