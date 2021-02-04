const Connectdb = require('../common/dbconnection');
const List = require('../common/List');
class Productlist extends List {
    constructor () {
        super ();
    }
    list(req, res) {
        var db = new Connectdb();
        db.connectMysql();
        let products = [
            {
                name: 'clothes',
                id: '101'
            },
            {
                name: 'stationery',
                id: '102'
            },
            {
                name: 'eatable',
                id: '103'
            },

        ]
        res.send(products);
    }
} 
module.exports = Productlist
