const mongoose = require('mongoose')

const outletSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    isOpen: { type: Boolean, default: true }
})

module.exports = mongoose.model('Outlet', outletSchema)