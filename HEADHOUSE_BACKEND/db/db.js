const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({

    host:'bjkibmfk7j1ord8nl52c-mysql.services.clever-cloud.com',
    user:'upv8b9nc0h96jl9o',
    password:'T1uGWJKSdhFvgQuT2lOU',
    database:'bjkibmfk7j1ord8nl52c',
    multipleStatements: true


});

mysqlConnection.connect((error) =>{
    if (error){
        console.error(error);
        return;
    } else {
        console.log('Base de datos, se conectó con éxito');
    }
});

module.exports = mysqlConnection;