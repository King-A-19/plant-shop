const express = require('express')

const router = express.Router()

//GET all plants
router.get('/plants', (req, res) => {
    res.json({msg: 'Get all plants'})
})

//GET a single plant
router.get('/plants/:id', (req, res) => {
    res.json({msg: 'Get a single plant'})
})

//GET cart item
router.get('/cart', (req, res) => {
    res.json({msg: 'GET cart items'})
})

//POST add item to cart
router.post('/cart', (req, res) => {
    res.json({msg: 'POST item to cart'})
})

//DELETE remove item from cart
router.delete('/cart/:plantId', (req, res) => {
    res.json({msg: 'DELETE item from cart'})
})

//UPDATE item quantity in cart
router.patch('/cart/:plantId', (req, res) => {
    res.json({msg: 'UPDATE item quantity in cart'})
})


module.exports = router