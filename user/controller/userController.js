class userController {

    list (req, res) {
        let users = [
            {
            name: 'ram',
            id: '1',
            dob: '1982'
            },
            {
            name: 'shayam',
            id: '2',
            dob: '1983'
            },
            {
            name: 'mohan',
            id: '3',
            dob: '1984'
            },
            ];

            let user = {};
            for (let i = 0;i<users.length;i++) {

                if (users[i].id == req.params.id) {
                     user = users[i];
                }
            }

        res.send(user)
    };

}

    //name (req, res) {
    //res.send(req.params)        
    //};
module.exports = userController 