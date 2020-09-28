const express = require('express')

const routers = function(server){

    const router = express.Router()
    server.use(router)

    // ---------- Renderizar diseños --------------- //

    /*

    ----Enviar parametros en plantilla----

    router.get('/', function(req, res){
        res.render('login', {layout: 'acceso', script_name: 'login'})
    })

    */

   router.get('/', function(req, res){
    res.render('home')
   })


}

module.exports = routers