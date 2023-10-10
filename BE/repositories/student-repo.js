const AccountReposity = require('./account-repo')

class StudentReposity extends AccountReposity {

}

module.exports = new StudentReposity('student.json');