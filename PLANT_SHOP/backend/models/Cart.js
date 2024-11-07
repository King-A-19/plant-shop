const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cartItemSchema = new Schema({
    plantId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Plant', 
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
})
    
const cartSchema = new Schema({
    items: [cartItemSchema],
}, {timestamps: true})

module.exports = mongoose.model('Cart', cartSchema)