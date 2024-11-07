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

// GET plants by category
const getPlantsByCategory = async (req, res) => {
    const { category } = req.params; // Capture the 'category' from URL parameters

    try {
        const plants = await Plant.find({ category });
        if (plants.length === 0) {
            return res.status(404).json({ message: 'No plants found in this category' });
        }
        res.status(200).json(plants);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// GET cart items
const getItem = async (req, res) => {
    try {
        const cart = await Cart.findOne();
        res.status(200).json(cart || { items: [] });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
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
const deleteItem = async (req, res) => {
    const { plantId } = req.params;

    try {
        const cart = await Cart.findOne();
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        cart.items = cart.items.filter(item => !item.plantId.equals(plantId));
        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// PUT update item quantity in cart
const updateItem =  async (req, res) => {
    const { plantId } = req.params;
    const { quantity } = req.body;

    try {
        const cart = await Cart.findOne();
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        const item = cart.items.find(item => item.plantId.equals(plantId));
        if (!item) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        item.quantity = quantity;
        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getPlants,
    getPlantsByCategory,
    addItem,
    getItem,
    deleteItem,
    updateItem
}