class HTTPUtils {

    static sendValidationError(response, message) {
        HTTPUtils.sendError(response, 400, message)
    }

    static sendInternalServerError(response, message) {
        HTTPUtils.sendError(response, 500, message)
    }

    static sendError(response, code, message) {
        if (!response) {
            return;
        }
        response.status(code);
        response.json({
            res: "error",
            status: false,
            message: message.toString()
        });
        return null;
    }

    static sendSuccessResponse(res, data, metadata, message) {
        let resObject = {
            res: "success",
            status: true
        }
        if (message) {
            resObject['message'] = message
        }
        if (data) {
            resObject["data"] = data
        }
        if (metadata) {
            resObject["metadata"] = metadata
        }
        res.json(resObject)
    }
}

module.exports = HTTPUtils;