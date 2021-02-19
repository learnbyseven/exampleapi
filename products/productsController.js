const Connectdb = require('../common/Connectdb');
const List = require('../common/List');
class Productlist extends List {
    constructor () {
        super ();
    }
    list(req, res) {
        var db = new Connectdb();
        var con = db.connectMysql();
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");

            con.query("select * from product;", function(err, result){
                res.send(result);
            });
          });

        
    }
} 
module.exports = Productlist
