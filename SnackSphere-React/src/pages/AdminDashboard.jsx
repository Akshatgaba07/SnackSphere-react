import React, { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { getSocket } from '../hooks/useSocket'

export default function AdminDashboard() {
  const { adminOutlet, logout } = useAuth()
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchOrders = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/orders/outlet/${encodeURIComponent(adminOutlet)}`)
      const data = await res.json()
      setOrders(data)
    } catch (err) {
      setError('❌ Failed to load orders. Is backend running?')
    } finally {
      setLoading(false)
    }
  }, [adminOutlet])

  useEffect(() => {
    fetchOrders()
    const socket = getSocket()
    socket.emit('joinOutlet', adminOutlet)
    socket.off('newOrder')
    socket.on('newOrder', () => fetchOrders())
    return () => socket.off('newOrder')
  }, [adminOutlet, fetchOrders])

  async function updateStatus(orderId, status) {
    try {
      const res = await fetch(`/api/orders/updateStatus`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status })
      })
      const data = await res.json()
      if (data.success) fetchOrders()
      else alert('❌ Failed to update: ' + data.error)
    } catch (err) {
      alert('❌ Could not reach server.')
    }
  }

  function handleLogout() {
    logout()
    navigate('/login')
  }

  const statusColor = {
    Pending: { bg: '#fff3e0', text: '#e65100', border: '#ff9800' },
    Confirmed: { bg: '#e3f2fd', text: '#1565c0', border: '#2196f3' },
    Preparing: { bg: '#f3e5f5', text: '#6a1b9a', border: '#9c27b0' },
    Ready: { bg: '#e8f5e9', text: '#2e7d32', border: '#4caf50' },
    Rejected: { bg: '#ffebee', text: '#c62828', border: '#f44336' }
  }

  const totalRevenue = orders.reduce((s, o) => s + o.total, 0)
  const activeOrders = orders.filter(o => ['Pending', 'Confirmed', 'Preparing'].includes(o.status)).length

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', padding: '20px', fontFamily: 'Poppins, sans-serif' }}>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #d90000 0%, #ff6b6b 100%)',
        color: 'white', padding: '20px', borderRadius: '16px', marginBottom: '20px'
      }}>
        <h2 style={{ margin: 0 }}>🪟 {adminOutlet}</h2>
        <p style={{ margin: '4px 0 0 0', opacity: 0.9 }}>Admin Dashboard</p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
          <button onClick={fetchOrders} style={{
            background: 'rgba(255,255,255,0.25)', border: 'none', color: 'white',
            padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600
          }}>🔄 Refresh Orders</button>
          <button onClick={handleLogout} style={{
            background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white',
            padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600
          }}>🚪 Logout</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        {[
          { label: 'Total Orders', value: orders.length },
          { label: 'Active Orders', value: activeOrders },
          { label: 'Total Revenue', value: `₹${totalRevenue}` }
        ].map((stat, i) => (
          <div key={i} style={{ background: 'white', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#d90000' }}>{stat.value}</div>
            <div style={{ fontSize: '13px', color: '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <h3 style={{ marginBottom: '12px' }}>📋 Orders</h3>

      {loading && <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>Loading orders...</div>}
      {error && <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>{error}</div>}

      {!loading && !error && orders.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '12px', color: '#999' }}>
          <div style={{ fontSize: '40px' }}>😭</div>
          <p>No orders yet for {adminOutlet}</p>
        </div>
      )}

      {orders.map(order => {
        const sc = statusColor[order.status] || { bg: '#f5f5f5', text: '#666', border: '#999' }
        return (
          <div key={order.orderId} style={{
            background: 'white', borderRadius: '12px', padding: '16px',
            marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            borderLeft: `4px solid ${sc.border}`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontWeight: 700, color: '#d90000' }}>#{order.orderId}</span>
              <span style={{
                background: sc.bg, color: sc.text,
                padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600
              }}>{order.status}</span>
            </div>

            <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>
              🕐 {new Date(order.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} • 👤 {order.userEmail}
            </div>

            <div style={{ fontSize: '13px', borderTop: '1px solid #f0f0f0', paddingTop: '8px' }}>
              {order.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>• {item.name} × {item.quantity}</span>
                  <span style={{ fontWeight: 600 }}>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginTop: '10px', borderTop: '1px solid #f0f0f0', paddingTop: '8px'
            }}>
              <span style={{ fontWeight: 700 }}>Total: ₹{order.total} • {order.paymentMethod}</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                {order.status === 'Pending' && (
                  <>
                    <button onClick={() => updateStatus(order.orderId, 'Confirmed')}
                      style={{ background: '#2196f3', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px' }}>
                      ✅ Accept
                    </button>
                    <button onClick={() => updateStatus(order.orderId, 'Rejected')}
                      style={{ background: '#f44336', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px' }}>
                      ❌ Reject
                    </button>
                  </>
                )}
                {order.status === 'Confirmed' && (
                  <button onClick={() => updateStatus(order.orderId, 'Preparing')}
                    style={{ background: '#9c27b0', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px' }}>
                    👨‍🍳 Preparing
                  </button>
                )}
                {order.status === 'Preparing' && (
                  <button onClick={() => updateStatus(order.orderId, 'Ready')}
                    style={{ background: '#4caf50', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px' }}>
                    🎉 Ready
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
