const HTTPUtils = require('../utils/httpUtils')
const ErrorCode = require('../config/errors.json')
const AuthServices = require('../services/auth')
class Auth {

    static login (req, res) {

        if(!req.body.password){
            console.error("Unable to get password.")
            HTTPUtils.sendValidationError(res, ErrorCode.INVALID_PASSWORD)
        }

        if(!req.body.email){
            console.error('Unable to get user email.')
            HTTPUtils.sendValidationError(res, ErrorCode.INVALID_EMAIL)
        }

        AuthServices.login(req.body.email, req.body.password).then(result => {
            if(result){
                res.data = result
            }
            else{
                res.data = "Login Failed"
            }
            HTTPUtils.sendSuccessResponse(res, res.data)
        })


    }

}

module.exports = Auth;