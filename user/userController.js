const { response } = require('express');
const DB = require('../common/DB');


class User extends DB {
    constructor () {
        super('192.168.1.51', 'userdb', 'root', 'root@123');  
    };
    async get(req, res) {
        let con = await this.connectDB();
        getuserquery = 'SELECT * FROM userdata';
        con.query(getuserquery, function(err, result){
           res.send(result);
           });    
    };
    create(req, res) {
        let con = this.connectDB();

        let createuserquery = 'INSERT INTO userdata SET ?'
        let userinfo = {
            id: req.body.id, 
            name: req.body.name,
            email: req.body.email,
            cryptocoins: req.body.cryptocoins
        }
        con.query(createuserquery, userinfo, function(err, result){
            res.send(result);
            });
    };
         
    delete(req, res) {
        let db = new connectDB();
        let con = db.connectMysql();
        let username = req.params.name;
        let deleteuserquery = "DELETE FROM userdata WHERE name = ?"; 
        console.log(deleteuserquery);
        con.query(deleteuserquery, username, function(err, result){
            res.send(result);
        })
    };
};

module.exports = User
