import React, { useEffect, useState } from 'react'

export default function UMoneyPage() {
  const [stats, setStats] = useState({ balance: 5000, spent: 0, orders: 0 })

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('snackSphereOrders') || '[]')
    const spent = orders.reduce((s, o) => s + o.total, 0)
    setStats({ balance: 5000 - spent, spent, orders: orders.length })
  }, [])

  return (
    <section id="umoneySection" className="nav-section" style={{ display: 'block' }}>
      <div className="nav-section-header"><h2>👛 uMoney Wallet</h2></div>
      <div className="umoney-content">
        <div className="wallet-card">
          <div className="wallet-card-top">
            <p className="wallet-label">Available Balance</p>
            <h1 className="wallet-amount">₹{stats.balance}</h1>
          </div>
          <div className="wallet-card-bottom">
            <div className="wallet-stat">
              <span className="wallet-stat-label">Total Spent</span>
              <span className="wallet-stat-value">₹{stats.spent}</span>
            </div>
            <div className="wallet-stat">
              <span className="wallet-stat-label">Total Orders</span>
              <span className="wallet-stat-value">{stats.orders}</span>
            </div>
          </div>
        </div>

        <div className="wallet-actions">
          {[
            { icon: '➕', label: 'Add Money' },
            { icon: '↗️', label: 'Transfer' },
            { icon: '📊', label: 'History' },
            { icon: '🎁', label: 'Offers' }
          ].map(a => (
            <button key={a.label} className="wallet-action-btn" onClick={() => alert(`${a.label}: Coming Soon!`)}>
              <span>{a.icon}</span>
              <span>{a.label}</span>
            </button>
          ))}
        </div>

        <div className="wallet-offers">
          <h3>💰 Cashback Offers</h3>
          {[
            { icon: '🍕', title: '10% Cashback on Pizza', desc: 'Valid on orders above ₹200', tag: 'NEW' },
            { icon: '☕', title: 'Free Coffee on ₹150+', desc: 'At Maggi Hotspot only', tag: 'HOT' },
            { icon: '🥟', title: 'Buy 2 Get 1 Free Momos', desc: 'House of Chow & Snap Eats', tag: 'DEAL' }
          ].map(o => (
            <div className="offer-card" key={o.title}>
              <span className="offer-icon">{o.icon}</span>
              <div>
                <p className="offer-title">{o.title}</p>
                <p className="offer-desc">{o.desc}</p>
              </div>
              <span className="offer-tag">{o.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
