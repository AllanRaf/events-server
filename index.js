//events-server index
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const event = require('./event/model')
const router = require('./event/router')

const app = express()

const corsMiddleware = cors() //
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(router)
const port = 4000

app.listen(port, console.log(`listening on port: ${port}`))