const { Router } = require('express');
const router = Router();
const path = require('path')
const mysqlConnection = require('../db/db');

router.get('/', (req, res)=>{

    let nombreCliente = 'Javier'

    mysqlConnection.query('SELECT * FROM servicios', (err, rows, fileds)=>{
        if (!err){
            res.render('clientePrueba',{rows});
        } else {
            console.log(err);
        }
    });


});


module.exports = router;