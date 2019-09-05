const express = require('express')

const routes = express.Router()
const productController = require('./controller/ProductController')

routes.get('/products', productController.index)
routes.post('/products', productController.store)

module.exports = routes