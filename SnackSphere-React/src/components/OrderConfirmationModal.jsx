import React from 'react'

export default function OrderConfirmationModal({ order, onClose }) {
  if (!order) return null

  return (
    <div className="order-confirmation-modal show" style={{ display: 'flex' }}>
      <div className="order-confirmation-card">
        <div className="order-success-icon">✅</div>
        <h1>Order Confirmed!</h1>
        <p className="order-text">Your order has been placed successfully</p>

        <div className="order-details-section">
          <div className="order-id-box">
            <p className="label">Order ID</p>
            <p className="order-id-value">{order.orderId}</p>
          </div>
          <div className="delivery-time-box">
            <p className="label">Estimated Delivery</p>
            <p className="delivery-time">30-45 minutes</p>
          </div>
        </div>

        <div className="order-items-section">
          <h3>Order Items</h3>
          <div className="confirmation-items">
            {order.items.map((item, i) => (
              <div className="confirmation-item" key={i}>
                <span className="confirmation-item-name">{item.name}</span>
                <span className="confirmation-item-qty">x{item.quantity}</span>
                <span className="confirmation-item-price">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-summary-section">
          <div className="summary-line">
            <span>Subtotal</span><span>₹{order.subtotal}</span>
          </div>
          <div className="summary-line">
            <span>Delivery Charges</span><span>₹50</span>
          </div>
          <div className="summary-line taxes">
            <span>Taxes & Fees</span><span>₹{order.taxes}</span>
          </div>
          <div className="summary-line total">
            <span>Total Amount Paid</span><span>₹{order.total}</span>
          </div>
          <div className="payment-method-display">
            <span>Payment Method</span><span>{order.paymentMethod}</span>
          </div>
        </div>

        <div className="order-actions">
          <button className="track-order-btn" onClick={() => alert('📍 Order is being prepared!\n\n🕐 30-45 minutes estimated')}>
            Track Order
          </button>
          <button className="continue-btn" onClick={onClose}>
            Continue Shopping
          </button>
        </div>

        <div className="order-footer-text">
          <p>Thank you for ordering from SnackSphere! 🎉</p>
        </div>
      </div>
    </div>
  )
}
