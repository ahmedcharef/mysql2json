var mysql = require('mysql');
var fs = require('fs');

var client = mysql.createConnection({
	host:"localhost",
	port: '3306',
	user:"root",
	password:"",
	database: "DB"
});
client.query('select * from users', function(err, results, fields) {
    if(err) throw err;
    console.log(results);
    fs.writeFile('users.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

    client.end();   
});
