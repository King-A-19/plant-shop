const express = require('express')
const { addItem, getPlants, getPlant } = require('../controllers/plantController')


const router = express.Router()

//GET all plants
router.get('/plants', getPlants)

//GET a single plant
router.get('/plants/:id', getPlant)

//GET cart item
router.get('/cart', (req, res) => {
    res.json({msg: 'GET cart items'})
})

//POST add item to cart
router.post('/cart', addItem)

//DELETE remove item from cart
router.delete('/cart/:plantId', (req, res) => {
    res.json({msg: 'DELETE item from cart'})
})

//UPDATE item quantity in cart
router.patch('/cart/:plantId', (req, res) => {
    res.json({msg: 'UPDATE item quantity in cart'})
})


module.exports = router