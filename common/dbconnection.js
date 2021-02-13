const mysql = require('mysql');

class Connectdb {
    connectMysql() {
        const con = mysql.createConnection({
            host: "192.168.43.52",
            user: "root",
            password: "root@123",
            database: "productdb"
          });
          return con;
    }
}
module.exports = Connectdb