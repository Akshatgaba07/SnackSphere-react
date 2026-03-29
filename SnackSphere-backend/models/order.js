const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    userEmail: { type: String, required: true },
    items: [{
        name: String,
        price: Number,
        quantity: Number
    }],
    subtotal: Number,
    delivery: Number,
    taxes: Number,
    total: Number,
    paymentMethod: String,
    outletName: String,
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Preparing', 'Ready', 'Delivered', 'Rejected'],
        default: 'Pending'
    },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);