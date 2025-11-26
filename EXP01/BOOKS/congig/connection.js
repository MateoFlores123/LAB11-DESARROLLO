const mysql =  require('mysql2');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'NuevaContraseña123',
    database: 'biblioteca2'
});

con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos biblioteca');
});

module.exports = con;
