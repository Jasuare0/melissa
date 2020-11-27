const express = require('express');
//importante para conexion del front en el back
const cors = require('cors');
const app = express();
const index = require('./routes/index')
const servicios = require('./routes/servicios')
const cliente = require('./routes/cliente')

const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//importante para conexion del front con el back
//Uso de cors
app.use(cors({origin: 'https://headhouse2020.vercel.app/'}));
// conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.vercel.app/'}))


//importante para despliegue
//Ajuste
app.set('view engine','ejs');
app.set('views',__dirname+'../../headhouse/headhouse/public')
app.set('port', process.env.PORT || 4001);


//Middlewares
app.use(express.json());


//instanciar las rutas
app.use('/', index);

app.use('/api', servicios);
app.use('/cliente', cliente);


//Dónde voy a escuchar el servidor
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})

