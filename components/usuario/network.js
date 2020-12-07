const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars')
require('dotenv').config();

router.post('/', (req, res) => {
    const { name , email } = req.body;

    // contentHtml = `
    // <h1>Hola </h1>
    // <p>Tu correo electrónico  ha sido registrado satisfactoriamente.</p>
    // `
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    transporter.use("compile",hbs({
        viewEngine:{
           partialsDir:"./views/",
           defaultLayout:""
       },
        viewPath:"./src/views/",
        extName:".hbs"
  }));

    let mailOptions = {
        from: 'fakecoachingperu@gmail.com',
        to: `${email}`,
        subject: 'Bienvenido a FakeCoaching',
        template: 'mail',
        context: {
            name: `${name}`
        }
    }

    transporter.sendMail(mailOptions)
    .then(function(response){
        console.log('Email sent');
    })
    .catch(function(error){
        console.log('Error', error)
    })

    res.redirect('/');
})


module.exports = router