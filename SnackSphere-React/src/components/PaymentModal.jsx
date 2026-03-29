import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function PaymentModal({ isOpen, onClose, onSuccess, outletName }) {
  const { cart, totalAmount, clearCart } = useCart()
  const { userEmail } = useAuth()
  const [method, setMethod] = useState(null)
  const [upiId, setUpiId] = useState('')
  const [loading, setLoading] = useState(false)

  const delivery = 50
  const taxes = Math.round(totalAmount * 0.05)
  const grandTotal = totalAmount + delivery + taxes

  if (!isOpen) return null

  async function completePayment(paymentMethod) {
    console.log('outlet at payment:', outletName)

    setLoading(true)
    const orderId = 'SS' + Math.random().toString(36).substr(2, 9).toUpperCase()
    const order = {
      orderId,
      userId: userEmail,
      userEmail,
      items: cart,
      subtotal: totalAmount,
      delivery,
      taxes,
      total: grandTotal,
      paymentMethod,
      outletName: outletName,
      status: 'Pending',
      timestamp: new Date().toISOString()
    }

    console.log('Sending order:', order)

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      })
      const data = await res.json()
      console.log('Backend response:', data)
    } catch (err) {
      console.log('Backend save failed:', err)
    }

    // localStorage fallback
    const orders = JSON.parse(localStorage.getItem('snackSphereOrders') || '[]')
    orders.push(order)
    localStorage.setItem('snackSphereOrders', JSON.stringify(orders))

    clearCart()
    setLoading(false)
    onSuccess(order)
  }

  function handleUPI() {
    if (!upiId.trim()) { alert('Please enter your UPI ID'); return }
    completePayment('UPI')
  }

  return (
    <div className="payment-modal show" style={{ display: 'flex' }}>
      <div className="payment-card">
        <div className="payment-header">
          <h2>💳 Payment Method</h2>
          <button className="close-payment" onClick={onClose}>&times;</button>
        </div>

        <div className="payment-methods">
          <button
            className={`payment-method-btn upi-btn ${method === 'upi' ? 'active' : ''}`}
            onClick={() => setMethod('upi')}
          >
            <span className="payment-icon">📱</span>
            <span>UPI</span>
          </button>
          <button
            className={`payment-method-btn card-btn ${method === 'card' ? 'active' : ''}`}
            onClick={() => setMethod('card')}
          >
            <span className="payment-icon">💳</span>
            <span>Card</span>
          </button>
          <button
            className={`payment-method-btn wallet-btn ${method === 'wallet' ? 'active' : ''}`}
            onClick={() => setMethod('wallet')}
          >
            <span className="payment-icon">👛</span>
            <span>Wallet</span>
          </button>
        </div>

        {method === 'upi' && (
          <div className="payment-section">
            <h3>UPI Payment</h3>
            <input
              type="text"
              placeholder="Enter UPI ID (e.g., user@upi)"
              className="payment-input"
              value={upiId}
              onChange={e => setUpiId(e.target.value)}
            />
            <button className="pay-btn" onClick={handleUPI} disabled={loading}>
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        )}

        {method === 'card' && (
          <div className="payment-section">
            <h3>Card Details</h3>
            <input type="text" placeholder="Card Number" className="payment-input" maxLength="16" />
            <div className="card-row">
              <input type="text" placeholder="MM/YY" className="payment-input" maxLength="5" />
              <input type="text" placeholder="CVV" className="payment-input" maxLength="3" />
            </div>
            <button className="pay-btn" onClick={() => completePayment('Card')} disabled={loading}>
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        )}

        {method === 'wallet' && (
          <div className="payment-section">
            <h3>Digital Wallet</h3>
            <p className="wallet-balance">Available Balance: ₹5000</p>
            <button className="pay-btn" onClick={() => completePayment('Wallet')} disabled={loading}>
              {loading ? 'Processing...' : 'Pay from Wallet'}
            </button>
          </div>
        )}

        <div className="order-summary">
          <p><strong>Order Total:</strong> ₹{totalAmount}</p>
          <p><strong>Delivery:</strong> ₹{delivery}</p>
          <p><strong>Taxes:</strong> ₹{taxes}</p>
          <p className="grand-total"><strong>Grand Total:</strong> ₹{grandTotal}</p>
        </div>
      </div>
    </div>
  )
}