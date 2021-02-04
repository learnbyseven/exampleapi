const List = require('../../common/List');

class Userlist extends List {
    constructor () {
        super();
    }
    list(req, res) {
        let users = [
            {
                name: 'ram',
                id: 1
            },
            {
                name: 'shiv',
                id: 2
            }
        ];
        res.send(users);
    }
    
}
module.exports = Userlist