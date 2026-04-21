import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function PaymentModal({ isOpen, onClose, onSuccess, outletName }) {
  const { cart, totalAmount, clearCart } = useCart()
  const { userEmail } = useAuth()
  const [method, setMethod] = useState(null)
  const [upiId, setUpiId] = useState('')
  const [orderNote, setOrderNote] = useState('')
  const [loading, setLoading] = useState(false)

  const delivery = 50
  const taxes = Math.round(totalAmount * 0.05)
  const grandTotal = totalAmount + delivery + taxes

  if (!isOpen) return null

  async function completePayment(paymentMethod, paymentId = null) {
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
      paymentId: paymentId || null,
      outletName,
      note: orderNote || '',
      status: 'Pending',
      timestamp: new Date().toISOString()
    }

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

  // ✅ Razorpay handler — inside component
  async function handleRazorpayPayment() {
    if (!window.Razorpay) {
      alert('Razorpay not loaded. Please refresh.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: grandTotal })
      })
      const data = await res.json()

      if (!data.success) {
        alert('Failed to create order')
        setLoading(false)
        return
      }

      const options = {
        key: 'rzp_test_SYCtfUVaGpw2NR',
        amount: data.order.amount,
        currency: 'INR',
        name: 'SnackSphere',
        description: `Order from ${outletName}`,
        order_id: data.order.id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response)
            })
            const verifyData = await verifyRes.json()

            if (verifyData.success) {
              await completePayment('Razorpay', response.razorpay_payment_id)
            } else {
              alert('Payment verification failed!')
              setLoading(false)
            }
          } catch (err) {
            alert('Verification error: ' + err.message)
            setLoading(false)
          }
        },
        prefill: {
          email: userEmail || '',
          name: 'SnackSphere User'
        },
        theme: { color: '#E8191A' },
        modal: {
          ondismiss: () => setLoading(false)
        }
      }

      const rzp = new window.Razorpay(options)
      rzp.open()

    } catch (err) {
      alert('Payment failed: ' + err.message)
      setLoading(false)
    }
  }

  return (
    <div className="payment-modal show" style={{ display: 'flex' }}>
      <div className="payment-card">

        {/* Header */}
        <div className="payment-header">
          <h2>💳 Payment</h2>
          <button className="close-payment" onClick={onClose}>&times;</button>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <p><span>Subtotal</span> <span>₹{totalAmount}</span></p>
          <p><span>Delivery</span> <span>₹{delivery}</span></p>
          <p><span>Taxes (5%)</span> <span>₹{taxes}</span></p>
          <p className="grand-total"><strong>Grand Total</strong> <strong>₹{grandTotal}</strong></p>
        </div>

        {/* Order Note */}
        <div style={{ padding: '0 0 16px' }}>
          <input
            type="text"
            placeholder="Add a note (optional)"
            className="payment-input"
            value={orderNote}
            onChange={e => setOrderNote(e.target.value)}
          />
        </div>

        {/* ✅ Razorpay Button — Primary */}
        <button
          onClick={handleRazorpayPayment}
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            background: loading ? '#999' : '#072654',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '700',
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '16px',
            boxShadow: '0 4px 16px rgba(7,38,84,0.3)'
          }}
        >
          {loading ? '⏳ Processing...' : '💳 Pay with Razorpay (UPI/Card/NetBanking)'}
        </button>

        {/* Divider */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px'
        }}>
          <div style={{ flex: 1, height: '1px', background: '#eee' }} />
          <span style={{ fontSize: '12px', color: '#999', fontWeight: '600' }}>OR PAY MANUALLY</span>
          <div style={{ flex: 1, height: '1px', background: '#eee' }} />
        </div>

        {/* Manual Payment Methods */}
        <div className="payment-methods">
          <button
            className={`payment-method-btn ${method === 'upi' ? 'active' : ''}`}
            onClick={() => setMethod(method === 'upi' ? null : 'upi')}
          >
            <span className="payment-icon">📱</span>
            <span>UPI</span>
          </button>
          <button
            className={`payment-method-btn ${method === 'card' ? 'active' : ''}`}
            onClick={() => setMethod(method === 'card' ? null : 'card')}
          >
            <span className="payment-icon">💳</span>
            <span>Card</span>
          </button>
          <button
            className={`payment-method-btn ${method === 'wallet' ? 'active' : ''}`}
            onClick={() => setMethod(method === 'wallet' ? null : 'wallet')}
          >
            <span className="payment-icon">👛</span>
            <span>Wallet</span>
          </button>
        </div>

        {/* UPI Section */}
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
              {loading ? 'Processing...' : `Pay ₹${grandTotal}`}
            </button>
          </div>
        )}

        {/* Card Section */}
        {method === 'card' && (
          <div className="payment-section">
            <h3>Card Details</h3>
            <input type="text" placeholder="Card Number" className="payment-input" maxLength="16" />
            <div className="card-row">
              <input type="text" placeholder="MM/YY" className="payment-input" maxLength="5" />
              <input type="text" placeholder="CVV" className="payment-input" maxLength="3" />
            </div>
            <button className="pay-btn" onClick={() => completePayment('Card')} disabled={loading}>
              {loading ? 'Processing...' : `Pay ₹${grandTotal}`}
            </button>
          </div>
        )}

        {/* Wallet Section */}
        {method === 'wallet' && (
          <div className="payment-section">
            <h3>Digital Wallet</h3>
            <div className="wallet-balance">💰 Available Balance: ₹5,000</div>
            <button className="pay-btn" onClick={() => completePayment('Wallet')} disabled={loading}>
              {loading ? 'Processing...' : `Pay ₹${grandTotal} from Wallet`}
            </button>
          </div>
        )}

      </div>
    </div>
  )
}