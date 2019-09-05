const express = require('express')

const routes = express.Router()
const productController = require('./controller/ProductController')

routes.get('/products', productController.index)
routes.get('/products/:id', productController.show)
routes.post('/products', productController.store)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.destroy)

module.exports = routes