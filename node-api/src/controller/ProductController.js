const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    async index(req, res){
        console.log(req.query)
        const { page = 1 } = req.query //ex.: { pages: 4 }
        const products = await Product.paginate({}, { page, limit: 10})      //primeiro campo são para where
        return res.json(products)
    },

    async show(req, res){
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },

    async store(req, res){
        const product = await Product.create(req.body)

        return res.json(product)
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })     //{ new: true } informa q o item atualizado deve ser retornado

        return res.json(product)
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}