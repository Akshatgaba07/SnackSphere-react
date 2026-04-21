const express = require('express')
const router = express.Router()
const Outlet = require('../models/Outlet')  // 👈 model alag se import

// Get outlet status
router.get('/status/:name', async (req, res) => {
    try {
        let outlet = await Outlet.findOne({ name: req.params.name })
        if (!outlet) {
            outlet = await Outlet.create({ name: req.params.name, isOpen: true })
        }
        res.json({ isOpen: outlet.isOpen })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Toggle outlet open/closed
router.post('/toggle/:name', async (req, res) => {
    try {
        let outlet = await Outlet.findOne({ name: req.params.name })
        if (!outlet) {
            outlet = await Outlet.create({ name: req.params.name, isOpen: true })
        }
        outlet.isOpen = !outlet.isOpen
        await outlet.save()
        res.json({ isOpen: outlet.isOpen })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router  // 