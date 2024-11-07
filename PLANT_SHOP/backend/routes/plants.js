const express = require('express')
const { addItem, 
    getPlants,  
    getItem, 
    deleteItem,
    updateItem,
    getPlantsByCategory
} = require('../controllers/plantController')


const router = express.Router()

//GET all plants
router.get('/plants', getPlants)

//GET a single plant
router.get('/plants/category/:category', getPlantsByCategory)

//GET cart item
router.get('/cart', getItem)

//POST add item to cart
router.post('/cart', addItem)

//DELETE remove item from cart
router.delete('/cart/:plantId', deleteItem)

//UPDATE item quantity in cart
router.patch('/cart/:plantId', updateItem)


module.exports = router