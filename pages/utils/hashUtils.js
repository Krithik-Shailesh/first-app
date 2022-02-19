const crypto = require('crypto')

class HashUtils {

    static getHashedData(data){
        return crypto.createHash('sha256').update(data).digest('hex')
    }

    static getPasswordHash(data){
        return crypto.createHash('sha512').update(data).digest('base64')
    }
    
}

module.exports = HashUtils