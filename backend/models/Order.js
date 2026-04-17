const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [{
        itemId: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    totalPrice: { type: Number, required: true },
    deliveryAddress: { type: String, required: true },
    serviceType: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;