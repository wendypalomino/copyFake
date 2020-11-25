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

   router.get('/usuario', function (req, res) {
    res.render('usuario')
})

}

module.exports = routers