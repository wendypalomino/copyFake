const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', (req, res) => {
    const { name , email } = req.body;

    contentHtml = `
    <h1>Hola ${name}</h1>
    <p>Tu correo electrónico ${email} ha sido registrado satisfactoriamente.</p>
    `
    
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


    let mailOptions = {
        from: 'testpalominovanessa@gmail.com',
        to: `${email}`,
        subject: 'Testing and Testing',
        html: contentHtml
    };

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