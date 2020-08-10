const mysql = require('mysql');

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'modul_3',
    multipleStatements: true
});

db.connect(function(err){
    if(err) throw err;
    else {
        console.log('kekonek hhhh');
    }
});

module.exports = db;