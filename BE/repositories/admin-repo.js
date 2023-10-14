const secretKey = "123AD23"

const AccountReposity = require('./repository')


class AdminReposity extends AccountReposity {
    validKey (key ) {
        return key === secretKey;
    }
}

module.exports = new AdminReposity('admin.json');


