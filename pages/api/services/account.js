const HashUtils = require('../../utils/hashUtils');
const MongoDBConnector = require('../db/index')

class Account{
    static addAccount(email, name, phone, password) {
        if (!email || email.trim().length == 0) {
            return Promise.reject("Invalid Email ID")
        }
        email = email.trim();
        email = email.toLowerCase();

        let emailHash = HashUtils.getHashedData(email)
        let passwordHash = HashUtils.getPasswordHash(password)

        return MongoDBConnector.getInstance().addAccount(emailHash, name, phone, passwordHash)
        .catch(err => {
            Promise.reject(err)
        })
    }
}
module.exports =Account;