const MongoDBConnector = require('../db/index')

class Account{
    static addAccount(email, name, phone, password) {
        if (!email || email.trim().length == 0) {
            return Promise.reject("Invalid Email ID")
        }
        email = email.trim();
        email = email.toLowerCase();

        return MongoDBConnector.getInstance().addAccount(email, name, phone, password)
        .catch(err => {
            Promise.reject(err)
        })
    }
}
module.exports =Account;