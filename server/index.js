require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , ctrl = require('./controller')
    , massive = require('massive')

const {
    SERVER_PORT,
    CONNECTION_STRING,
} = process.env

const app = express()

massive(CONNECTION_STRING).then( db => app.set('db', db))

app.use(bodyParser.json())

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port: ${SERVER_PORT}`)
})
