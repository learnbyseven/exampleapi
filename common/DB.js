const mysql = require('mysql')
class DB {
    constructor(host, database, user, password) {
        this.host = host;
        this.database = database;
        this.user = user;
        this.password = password;  
        this.connection = this.connectDB();
    };
    connectDB () {
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          host     : this.host,
          user     : this.user,
          password : this.password,
          database : this.database
        });
        connection.connect();
        return connection;
    };
};
module.exports =  DB

