const AccountRoute = require('./routes/account')
const MongoDBConnector = require('./db/index')

const express = require('express')
const server = express()
const cors = require('cors')

const port = 5001
server.use(cors())

MongoDBConnector.getInstance().connect();

server.use(require('body-parser').json());

server.listen(port, function() {
    console.info(`Server started at ${port}`)
})

server.get('/ping',function(req, res) {
    res.send({
        res: "Pong"
    })
})


server.post('/d/addAccount', AccountRoute.addAccount)



