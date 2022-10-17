const express = require ('express')

const app = express()
app.use(express.json())
app.use('/', require('./route/studentRoute'))
app.listen(8080)