import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

export default function OrdersPage() {
  const { userEmail } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchOrders()
  }, [userEmail])

  async function fetchOrders() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/orders/${userEmail}`)
      const data = await res.json()
      setOrders(data)
    } catch (err) {
      // fallback localStorage
      const local = JSON.parse(localStorage.getItem('snackSphereOrders') || '[]')
      setOrders(local.slice().reverse())
      setError('Showing cached orders (offline mode)')
    } finally {
      setLoading(false)
    }
  }

  const statusEmoji = {
    Confirmed: '✅', Preparing: '👨‍🍳', Ready: '🎉', Rejected: '❌', Pending: '⏳'
  }

  return (
    <section id="ordersSection" className="nav-section" style={{ display: 'block' }}>
      <div className="nav-section-header">
        <h2>📋 My Orders</h2>
      </div>
      <div id="ordersContent" className="orders-content">
        {loading && <p style={{ textAlign: 'center', color: '#999' }}>Loading orders...</p>}
        {error && <p style={{ textAlign: 'center', color: '#999', fontSize: '13px' }}>{error}</p>}

        {!loading && orders.length === 0 && (
          <div className="orders-empty">
            <div className="orders-empty-icon" style={{ fontSize: '60px' }}>🛍️</div>
            <h3>No Orders Yet</h3>
            <p>Your past orders will appear here</p>
          </div>
        )}

        {orders.map((order, i) => (
          <div className="order-card" key={order.orderId || i}>
            <div className="order-card-header">
              <span className="order-card-id">#{order.orderId}</span>
              <span className="order-card-status">
                {statusEmoji[order.status] || '⏳'} {order.status}
              </span>
            </div>
            <div className="order-card-date">
              🕐 {new Date(order.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </div>
            <div className="order-card-items">
              {order.items.map((item, j) => (
                <div key={j}>• {item.name} × {item.quantity} — ₹{item.price * item.quantity}</div>
              ))}
            </div>
            <div className="order-card-footer">
              <span className="order-card-total">Total: ₹{order.total}</span>
              <span className="order-card-payment">{order.paymentMethod}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
