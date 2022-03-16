const express = require('express')
const productsRouter = require("./products.router")
const facturaRouter = require('./facturas.router')

function routerApi(app) {
    const router = express.Router()
    //Parte del end point estatico: http://localhost:3000/api/v1
    app.use("/api/v1", router)
    //Enpoint 
    router.use("/products", productsRouter)
    router.use('/facturas', facturaRouter);
}

module.exports = routerApi