const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plantSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Plant', plantSchema)