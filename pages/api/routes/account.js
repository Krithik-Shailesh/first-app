const HTTPUtils = require('../utils/httpUtils')
const ErrorCode = require('../config/errors.json')
const AccountServices = require('../services/account')
class Account {

    static addAccount(req, res){

        if(!req.body.email){
            console.error("Unable to get user email.")
            HTTPUtils.sendValidationError(res, ErrorCode.INVALID_EMAIL)
        }

        if(!req.body.name || !req.body.phone){
            console.error("Unable to get the required details.")
            HTTPUtils.sendValidationError(res, ErrorCode.INVALID_DETAILS)
        }

        if(!req.body.password) {
            console.error("Unable to get user password.")
            HTTPUtils.sendValidationError(res, ErrorCode.INVALID_PASSWORD)
        }

        return AccountServices.addAccount(req.body.email, req.body.name, req.body.phone, req.body.password).then(result => {
            let data =  "Account created successfully."
            if(result){
                data = result
            }
            HTTPUtils.sendSuccessResponse(res, data)
        }).catch(e => {
            HTTPUtils.sendInternalServerError(res, e)
        })
    }

}

module.exports = Account;