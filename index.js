const express = require('express')
const { mongoose } = require('mongoose')
const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()
const routerApi = require('./routes')

//Puerto a ocupar
app.listen(port, () => console.log("Active port", port))

app.use(express.json())

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(() => console.log('succes connection with mongo'))
.catch((error) => console.log(error))

routerApi(app)