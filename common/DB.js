const mysql = require('mysql')
class DB {
    constructor(host, database, user, password) {
        this.host = host;
        this.database = database;
        this.user = user;
        this.password = password;
    };
    async connectDB () {
        const db = mysql.createConnection ({
        host: this.host,
        database: this.database,
        user: this.user,
        password: this.password
        });
        var con = await db.connectMysql();
        return con;
    };
};
module.exports =  DB