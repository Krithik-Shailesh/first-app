const HashUtils = require('../../utils/hashUtils');
const MongoDBConnector = require('../db/index')

class Auth {

    static login(email, password) {
        if (!email || email.trim().length == 0) {
            return Promise.reject("Invalid Email ID")
        }

        return MongoDBConnector.getInstance().login(email, password).then(res => {
            console.log("Auth res",res)
            return res
        })
        .catch(err => {
            Promise.reject(err)
        })
    }
}

module.exports = Auth