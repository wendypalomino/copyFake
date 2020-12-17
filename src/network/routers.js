const express = require('express')
const usuario = require('../../components/usuario/network')

const routers = function(server){

    server.use('/api-fake-coaching/usuario', usuario)
 
}



module.exports = routers
