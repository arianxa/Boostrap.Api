var express = require('express');
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



router.post('/alta_Registro', function(req, res, next) {
  var registro={
    Nombre:req.body.Nombre,
    Apellidos:req.body.Apellidos,
    Email:req.body.Email,
    Contraseña:req.body.Contraseña    
    };
  //  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    connection.query('insert into bd_web.registro set ?',registro, function (error,resultado){
      if(error){
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
        //Hay un error a la hora de conectarse a la BBDD
    } else {
        res.send(JSON.stringify({"status": 201, "error": null, "response": resultado}));
        //Se envian todos los usuarios
    }
  });    
});




router.post('/alta', function(req, res, next) {
  var registro={
      Nombre:req.body.Nombre,
      URL_Foto:req.body.URL_Foto
    };
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

    connection.query('insert into bd_web.productos set ?',registro, function (error,resultado){
      if(error){
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
        //Hay un error a la hora de conectarse a la BBDD
    } else {
        res.send(JSON.stringify({"status": 201, "error": null, "response": resultado}));
        //Se envian todos los usuarios
    }
  });    
});






// 
module.exports = router;
