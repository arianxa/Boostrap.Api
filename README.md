# Instalación API
Terminal:

```npm install express-generator -g```

Instalamos node-api:
```express --view=pug node-api```

Instalamos las dependencias:

```npm install```


Tambien en .\node-api\


```cd .\node-api\```


```npm install```

Carpeta node-api/apps.js


```var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var mysql = require("mysql");//Modulos para obtener la BD
var bodyParser = require('body-parser');//

//Creamos la conexion con la BD MODIFICAR CON TU BASE DE DATOS.
app.use(function(req, res, next){
global.connection = mysql.createConnection({
host : 'localhost',
user : 'root',//Usuario de mysql
password : 'mysql',
database : 'bd_web'
});
connection.connect();
next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras http
app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// ABRIR PUERTO DE ESUCHA
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});


module.exports = app;
```

Carpeta node-api/routes/user.js:

``` var express = require('express');
var router = express.Router();

/* GET users listing. */
//METODOS PARA LA BD 
router.get('/', function(req, res, next) {
  connection.query('SELECT * from bd_web.registro', function (error, results, fields) {
       if(error){
           res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
           //Hay un error a la hora de conectarse a la BBDD
       } else {
           res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
           //Se envian todos los usuarios
       }
  });
});


// 
module.exports = router;
```

Instalar mysql

``` install mysql```

Ejercutar node

``node ./app.js`` o ``node app.js``

Tambien tendriamos que instalar AXIOS
y los siguientes scripsts
npm i axios

