const express = require('express');
const router = express.Router();

let orders = []; // This will be replaced with database logic

// POST: Create a new order
router.post('/', (req, res) => {
    const { userId, items, totalAmount } = req.body;
    const newOrder = {
        id: orders.length + 1,
        userId,
        items,
        totalAmount,
        status: 'Pending',
        createdAt: new Date(),
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// GET: Fetch orders for a specific user
router.get('/user', (req, res) => {
    const { userId } = req.query;
    const userOrders = orders.filter(order => order.userId === userId);
    res.status(200).json(userOrders);
});

// GET: Fetch all orders
router.get('/', (req, res) => {
    res.status(200).json(orders);
});

// PATCH: Update order status
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const order = orders.find(order => order.id === parseInt(id));

    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    res.status(200).json(order);
});

module.exports = router;