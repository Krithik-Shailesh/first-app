const { MongoClient } = require('mongodb');
const { db } = require('../server_config.json')
const Account = require('./account')

class MongoDBConnector {
    constructor() {
        this.mongoDBClient = null;
    }

    static getInstance() {
        if (!MongoDBConnector.instance) {
            MongoDBConnector.instance = new MongoDBConnector();
        }
        return MongoDBConnector.instance;
    }

    connect() {
        let dbURL = db.url;
        if (db.user_name && db.password) {
            dbURL += `${db.user_name}:${db.password}@`
        }
        this.mongoDBClient = new MongoClient(dbURL, {useUnifiedTopology: true});
        return this.mongoDBClient.connect().then((result) => {
            this.db = this.mongoDBClient.db("Database")
            console.log('test')
            this.account = new Account(this.mongoDBClient);
            return result
        }).catch(e => {
            this.closeDB()
            return Promise.reject(e)
        });
    }

    getAccounts() {
        return this.account.getAccounts()    
    }

    addAccount(email, name, phone, password){
        return this.account.addAccount(email, name, phone, password)
    }

    closeDB() {
        if (!this.mongoDBClient) {
            return Promise.resolve()
        }
        return this.mongoDBClient.close();
    }

}

module.exports = MongoDBConnector;