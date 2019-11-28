const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 4000;

app.use(bodyParser.json());

//controller
// const AuthController = require('./controllers/authController');
const AdminController = require('./controllers/adminController');
const NewsletterController = require('./controllers/newsletterController')
const SharelogController = require('./controllers/shareLogController')

//endpoint check server
app.get('/', (req, res) => {
    res.send('API Sukses')
});

app.group('/api/v1', (router) => {
    //endpoint auth
    // router.post('/login', AuthController.login)

    //endpoint newsletter
    // get data newsletter untuk semua role
    router.get('/newsletters', NewsletterController.index);

    //endpoint Super Admin
    router.get('/admin/users', AdminController.index);

    //add user
    router.post('/admin/user', AdminController.createUser);

    //edit newsletter untuk admin
    router.patch('/newsletter/:id_newsletter', AdminController.updateNewsletterAdmin);

    //delete newsletter untuk admin
    router.delete('/newsletter/:id_newsletter', AdminController.deleteNewsletterAdmin)


    //endpoint narator

    //create newsletter untuk role admin & narator
    router.post('/:id_user/newsletter', NewsletterController.createNewsletter);

    //edit newsletter bagi pemilik user
    router.patch('/:id_user/newsletter/:id_newsletter', NewsletterController.updateNewsletter)

    //delete newsletter bagi pemilik user
    router.delete('/:id_user/newsletter/:id_newsletter', NewsletterController.deleteNewsletter)

    //endpoint sharelogs
    router.post('/:id_user/newsletter/:id_newsletter/share', SharelogController.createShareLog)

    router.get('/sharelogs', SharelogController.index)
})



app.listen(port, () => console.log(`Listening On Port ${port}!`));