const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Save new order
router.post('/', async (req, res) => {
    try {
        const io = req.app.get('io');
        const order = new Order(req.body);
        await order.save();

        if (io && order.outletName) {
            io.to(order.outletName).emit('newOrder', order);
        }

        res.json({ success: true, order });
    } catch (err) {
        console.error('POST /orders error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Update order status (admin)
router.post('/updateStatus', async (req, res) => {
    try {
        const io = req.app.get('io');
        const { orderId, status } = req.body;

        const order = await Order.findOneAndUpdate(
            { orderId },
            { status },
            { new: true }
        );

        if (!order) return res.status(404).json({ error: 'Order not found' });

        if (io) {
            io.to(order.userEmail).emit('orderStatusUpdate', {
                orderId: order.orderId,
                status: order.status
            });
        }

        res.json({ success: true, order });
    } catch (err) {
        console.error('updateStatus error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// ✅ outlet route PEHLE — warna /:email catch kar leta hai
router.get('/outlet/:outletName', async (req, res) => {
    try {
        const orders = await Order.find({ outletName: req.params.outletName })
            .sort({ timestamp: -1 });
        res.json(orders);
    } catch (err) {
        console.error('GET outlet orders error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Get orders by email
router.get('/:email', async (req, res) => {
    try {
        const orders = await Order.find({ userEmail: req.params.email })
            .sort({ timestamp: -1 });
        res.json(orders);
    } catch (err) {
        console.error('GET /orders error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;