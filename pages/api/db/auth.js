const { db } = require('../server_config.json')

class Auth {

    constructor(mongoClient) {
        this.mongoClient = mongoClient;
    }

    getAccountDB() {
        return this.mongoClient.db('Database').collection("accounts")
    }

    getAccounts() {
        return this.getAccountDB().find({}, { projection: { _id: 0 } }).toArray()
    }

    login(email, password) {
        return this.getAccountDB().findOne({_id: email, "account.password": password})
    }

}

module.exports = Auth;