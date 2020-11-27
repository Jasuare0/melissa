const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


router.get('/servicios', (req, res)=>{
    mysqlConnection.query('SELECT * FROM servicios', (err, rows, fileds)=>{
        if (!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
  });

  router.get('/nuevo-servicio', (req, res) =>{

console.log(req.query.descripcionservicio)

// res.send('Prueba')

    // const { descripcion_del_servicio } = req.query.descripcionservicio;

    let servicio = req.query.descripcionservicio;

    let nuevoServicio = `INSERT INTO servicios (descripcion_del_servicio)
            VALUES(?)`;

   mysqlConnection.query( nuevoServicio, servicio, (err, rows, fields)=>{
       if(!err){
           res.json({message: 'Servicio Añadido'});
       }else {
           return console.error(err.message);
       }
   });

});

module.exports = router;