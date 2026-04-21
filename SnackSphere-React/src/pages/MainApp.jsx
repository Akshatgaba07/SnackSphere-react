import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { useSocket } from '../hooks/useSocket'
import { useNavigate } from 'react-router-dom'
import ExplorePage from './ExplorePage'
import OrdersPage from './OrdersPage'
import UMoneyPage from './UMoneyPage'
import ProfilePage from './ProfilePage'
import CartModal from '../components/CartModal'
import PaymentModal from '../components/PaymentModal'
import OrderConfirmationModal from '../components/OrderConfirmationModal'
import FloatingCartBar from '../components/FloatingCartBar'

export default function MainApp() {
  const [savedOutlet, setSavedOutlet] = useState('')
  const { userEmail, logout } = useAuth()
  const { totalItems, currentOutlet } = useCart()
  const navigate = useNavigate()
  const socket = useSocket(userEmail)

  const [activeTab, setActiveTab] = useState('Explore')
  const [cartOpen, setCartOpen] = useState(false)
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [confirmedOrder, setConfirmedOrder] = useState(null)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'enabled')
  const [notification, setNotification] = useState(null)

  // Store outlet name in a ref so it never gets stale
  const outletRef = useRef(currentOutlet || localStorage.getItem('currentOutlet') || '')

  // Keep ref updated whenever currentOutlet changes
  useEffect(() => {
    if (currentOutlet) {
      outletRef.current = currentOutlet
      setSavedOutlet(currentOutlet)
      console.log('outletRef updated:', outletRef.current)
    }
  }, [currentOutlet])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
    localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled')
  }, [darkMode])

  useEffect(() => {
    socket.on('orderStatusUpdate', (data) => {
      showNotification(data.orderId, data.status)
      if (activeTab === 'Orders') setActiveTab('Orders')
    })
    return () => socket.off('orderStatusUpdate')
  }, [socket, activeTab])

  function showNotification(orderId, status) {
    const emoji = { Confirmed: '✅', Preparing: '👨‍🍳', Ready: '🎉', Rejected: '❌' }
    const msg = {
      Confirmed: 'Your order has been confirmed!',
      Preparing: 'Your food is being prepared!',
      Ready: 'Your order is ready for pickup!',
      Rejected: 'Your order was rejected. Please reorder.'
    }
    setNotification({ orderId, status, emoji: emoji[status] || '📦', msg: msg[status] || status })
    setTimeout(() => setNotification(null), 5000)
  }

  function handleLogout() {
    logout()
    navigate('/login')
  }

  function handlePaymentSuccess(order) {
    setPaymentOpen(false)
    setCartOpen(false)
    setConfirmedOrder(order)
  }

  function handleConfirmClose() {
    setConfirmedOrder(null)
    setActiveTab('Explore')
  }

  function handleCheckout() {
    const outlet = savedOutlet || outletRef.current || localStorage.getItem('currentOutlet') || ''
    console.log('Checkout clicked, outlet:', outlet)
    outletRef.current = outlet
    setCartOpen(false)
    setPaymentOpen(true)
  }
  const tabs = [
    { name: 'Explore', icon: 'explore' },
    { name: 'Orders', icon: 'receipt_long' },
    { name: 'uMoney', icon: 'account_balance_wallet' },
    { name: 'Profile', icon: 'person' }
  ]

  return (
    <div id="mainContent" className="main-content show" style={{ display: 'block' }}>

      {notification && (
        <div style={{
          position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, #d90000 0%, #ff6b6b 100%)',
          color: 'white', padding: '16px 24px', borderRadius: '16px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)', zIndex: 99999,
          fontWeight: 600, textAlign: 'center', minWidth: '300px'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>{notification.emoji}</div>
          <div style={{ fontSize: '15px', fontWeight: 700 }}>Order #{notification.orderId}</div>
          <div style={{ fontSize: '13px', marginTop: '4px', opacity: 0.9 }}>{notification.msg}</div>
        </div>
      )}

      {activeTab === 'Explore' && (
        <>
          <header className="app-header">
            <div className="header-top">
              <div className="header-info">
                <h1>🍕 SnackSphere</h1>
                <p>Your Food Hub</p>
              </div>
              <div className="header-actions">
                <button className="logout-btn" onClick={handleLogout}>
                  <span className="material-icons">logout</span>
                </button>
              </div>
            </div>
          </header>

          <div className="dark-toggle-container">
            <span>🌙</span>
            <label className="dark-switch">
              <input
                type="checkbox"
                id="darkModeToggle"
                checked={darkMode}
                onChange={e => setDarkMode(e.target.checked)}
              />
              <span className="dark-slider"></span>
            </label>
          </div>

          <div className="categories">
            <div className="card active">Food</div>
            <button className="cart-icon-btn" onClick={() => setCartOpen(true)}>
              🛒 <span className="cart-count">{totalItems}</span>
            </button>
          </div>
        </>
      )}

      {activeTab === 'Explore' && <ExplorePage onCartOpen={() => setCartOpen(true)} />}
      {activeTab === 'Orders' && <OrdersPage />}
      {activeTab === 'uMoney' && <UMoneyPage />}
      {activeTab === 'Profile' && <ProfilePage onLogout={handleLogout} />}

      <nav className="bottom-nav">
        {tabs.map(tab => (
          <div
            key={tab.name}
            className={`nav-item ${activeTab === tab.name ? 'active' : ''}`}
            data-item={tab.name}
            onClick={() => setActiveTab(tab.name)}
          >
            <span className="material-icons">{tab.icon}</span>
            <br />{tab.name}
          </div>
        ))}
      </nav>

      {cartOpen && (
        <CartModal
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          onCheckout={handleCheckout}
        />
      )}
      {paymentOpen && (
        <PaymentModal
          isOpen={paymentOpen}
          onClose={() => setPaymentOpen(false)}
          onSuccess={handlePaymentSuccess}
          outletName={outletRef.current || savedOutlet}
        />
      )}
      {confirmedOrder && (
        <OrderConfirmationModal
          order={confirmedOrder}
          onClose={handleConfirmClose}
        />
      )}
      <FloatingCartBar onCartOpen={() => setCartOpen(true)} />
    </div>
  )
}