const Plant = require('../models/plantModel')
const Cart = require('../models/Cart')

// GET all plants
const getPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.status(200).json(plants);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// GET a single plant
const getPlant = async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant ) {
            return res.status(404).json({ message: 'Plant not found' });
        }
        res.status(200).json(plant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
// GET cart items

// POST add item to cart
const addItem =  async (req, res) => {
    const { plantId, quantity } = req.body;
    try {
        const plant = await Plant.findById(plantId);
        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }

        let cart = await Cart.findOne();
        if (!cart) {
            cart = new Cart({ items: [] });
        }

        // Check if plant is already in the cart
        const itemIndex = cart.items.findIndex(item => item.plantId.equals(plantId));
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ plantId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// DELETE remove item from cart

// PUT update item quantity in cart

module.exports = {
    getPlants,
    getPlant,
    addItem
}