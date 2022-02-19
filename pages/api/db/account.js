const { db } = require('../server_config.json')

class Account {

    constructor(mongoClient) {
        this.mongoClient = mongoClient;
    }

    getAccountDB() {
        return this.mongoClient.db('Database').collection("accounts")
    }

    getAccounts() {
        return this.getAccountDB().find({}, { projection: { _id: 0 } }).toArray()
    }

    addAccount(email, name, phone, password) {

        let accountObject = {
            name: name,
            phone: phone,
            password: password
        }

        return this.getAccountDB().findOne({ _id: email }).then(result => {
            if(!result){
                this._addAccount(email, accountObject)
            }
            else{
                return Promise.resolve("Account already exists!")
            }
        })

    }

    _addAccount(email, accountObject) {
        return this.getAccountDB().insertOne({ _id: email, account: accountObject}).then(res => {
            return accountObject
        })
    }
    
}

module.exports = Account;