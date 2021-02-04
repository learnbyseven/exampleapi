var mysql = require('mysql');

class Connectdb {
    connectMysql() {
        var con = mysql.createConnection({
            host: "192.168.1.51",
            user: "root",
            password: "root@123"
          });
          
          con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
          });

    }
}
module.exports = Connectdb