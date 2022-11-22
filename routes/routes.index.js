const users = require('./routes.users')
const getApi = (app) => {
    app.use('/',users)

}

module.exports = getApi