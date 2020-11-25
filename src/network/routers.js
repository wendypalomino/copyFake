const express = require('express')
const usuario = require('../../components/usuario/network')

const routers = function(server){

    server.use('/usuario', usuario)
 
}

module.exports = routers
