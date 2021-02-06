const mysql = require('mysql');
var con = mysql.createConnection({
    host: "database",
    user: "root",
    port: '3306',
    password: "somePassword",
    database: "db-mean",
    charset  : 'utf8'
});
// initial connection
con.connect(function(err) {
    if(err) console.log(err);
});
module.exports.getAllUsers = async ()=>{
    return new Promise((res,rej)=>{
        con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) rej(err);
        else 
        res(result);
    });
    });
}