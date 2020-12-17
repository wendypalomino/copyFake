const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const routers = require('./network/routers')

const router = express.Router()
const router_vista = require('./network/router_vista')
// const routers = require('./network/routers')
const path = require('path')

var app = express()


//----Definir motor de plantillas----//

app.engine( 'html', hbs( {
    extname: '.html',
    //defaultView: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
  }));

app.set('views',  path.join(__dirname, 'views'));
app.set('view engine', 'html');

//------------------------------------//

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
router_vista(app)
routers(app)

//------------------------------------//

app.use('/app', express.static('public'))

app.listen(81)
console.log('Servidor NodeJS en escucha en http://localhost:81')
