const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 4000;

app.use(bodyParser.json());

//controller
const AuthController = require('./controllers/authController');
const AdminController = require('./controllers/adminController');
const NewsletterController = require('./controllers/newsletterController')
const SharelogController = require('./controllers/shareLogController')

//middleware
const { authenticated } = require('./middleware')

//endpoint check server
app.get('/', (req, res) => {
    res.send('API Sukses')
});

app.group('/api/v1', (router) => {
    //endpoint auth
    router.post('/login', AuthController.login)

    //ENDPOINT NEWSLETTER
    //get data newsletter untuk semua role
    router.get('/newsletters', NewsletterController.index);

    //ENDPOINT ADMIN
    //get data user
    router.get('/admin/users', authenticated, AdminController.index);
    //add user
    router.post('/admin/user', authenticated, AdminController.createUser);

    //get data berita yang di share oleh user dengan role buzzer
    router.get('/admin/sharelogsbuzzer', authenticated, SharelogController.indexForAdmin)

    //edit newsletter untuk admin
    router.patch('/newsletter/:id_newsletter', authenticated, AdminController.updateNewsletterAdmin);
    //delete newsletter untuk admin
    router.delete('/newsletter/:id_newsletter', authenticated, AdminController.deleteNewsletterAdmin)

    //ENDPOINT NARATOR
    //create newsletter untuk role admin & narator
    router.post('/:id_user/newsletter', authenticated, NewsletterController.createNewsletter);
    //edit newsletter bagi pemilik user
    router.patch('/:id_user/newsletter/:id_newsletter', authenticated, NewsletterController.updateNewsletter)
    //delete newsletter bagi pemilik user
    router.delete('/:id_user/newsletter/:id_newsletter', authenticated, NewsletterController.deleteNewsletter)


    //ENDPOINT SHARELOG
    router.get('/sharelogs', SharelogController.index)
    router.post('/:id_user/newsletter/:id_newsletter/share', SharelogController.createShareLog)
})



app.listen(port, () => console.log(`Listening On Port ${port}!`));