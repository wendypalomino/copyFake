const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const router = express.Router()

var app = express()


//----Definir motor de plantillas----//

app.engine( 'html', hbs( {
    extname: '.html',
    //defaultView: 'main',
    layoutsDir: __dirname + 'views/layouts/',
    partialsDir: __dirname + 'views/partials/'
  }));

  app.set('view engine', 'html');

  //------------------------------------//

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/', function(req, res){

    // console.log(req.headers)

    res.header({
        "custom-header": "Nuestro valor predeterminado"
    })

    res.send('Hola, mundo')
})

router.post('/envioPost', function(req, res){
    console.log(req.query)
    console.log(req.body)
    //res.send('LLamado post ' + req.body.Nombre + ' con DNI: ' + req.query.dni)
    res.status(201).send({error: "", body: "Creado correctamente"})
})

app.listen(3008)
console.log('Servidor NodeJS en escucha en http://localhost:3008')
