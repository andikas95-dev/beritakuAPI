const models = require('../models')
const Newsletters = models.newsletter
const Users = models.user


//Melihat List Newsletter
exports.index = (req, res) => {
    Newsletters.findAll({
        include: [
            {
                model: Users,
                attributes: ['username']
            }
        ]
    })
        .then(result => res.send(result))
        .catch(err => res.send(err))
}

//Membuat Newsletter
exports.createNewsletter = (req, res) => {
    var { title, content, file } = req.body;
    var { id_user } = req.params
    Newsletters.create({
        title,
        content,
        file,
        id_user
    })
        .then(result => res.send(result))
        .catch(err => res.send(err))
}

// Mengubah Newsletter
exports.updateNewsletter = (req, res) => {
    var { title, content, file } = req.body
    var { id_user, id_newsletter } = req.params

    const data = {
        title,
        content,
        file,
        id_user
    }
    Newsletters.update(data, {
        where: { id: id_newsletter, id_user }
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

//Menghapus Newsletter
exports.deleteNewsletter = (req, res) => {
    var { id_newsletter, id_user } = req.params

    Newsletters.destroy({
        where: { id: id_newsletter, id_user }
    })
        .then(result => res.send({
            message: 'berhasil di Hapus',
            result
        }))
        .catch(err => res.send(err))
}