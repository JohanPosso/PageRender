const express = require('express')
require('dotenv').config()
require('colors')
const app = express()
const port = process.env.PORT

app.use(express.json());


const getApi = require('./routes/routes.index')
getApi(app)


app.listen(port, () => {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx'.blue)
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx'.blue)
    console.log(`Application Running in Port:`.green, port)
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx'.blue)
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx'.blue)

})