import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function ProfilePage({ onLogout }) {
  const { userEmail } = useAuth()
  const [stats, setStats] = useState({ orders: 0, spent: 0 })

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('snackSphereOrders') || '[]')
    const spent = orders.reduce((s, o) => s + o.total, 0)
    setStats({ orders: orders.length, spent })
  }, [])

  const name = (userEmail || 'user').split('@')[0]
  const initial = name.charAt(0).toUpperCase()
  const displayName = name.charAt(0).toUpperCase() + name.slice(1)

  const menuItems = [
    { icon: '✏️', label: 'Edit Profile' },
    { icon: '📍', label: 'Saved Addresses' },
    { icon: '🔔', label: 'Notifications' },
    { icon: '❓', label: 'Help & Support' },
    { icon: 'ℹ️', label: 'About SnackSphere', action: () => alert('SnackSphere v2.0\nBuilt for Bennett University') }
  ]

  return (
    <section id="profileSection" className="nav-section" style={{ display: 'block' }}>
      <div className="nav-section-header"><h2>👤 My Profile</h2></div>
      <div className="profile-content">
        <div className="profile-avatar-section">
          <div className="profile-avatar">
            <span id="profileInitial">{initial}</span>
          </div>
          <h3 id="profileName">{displayName}</h3>
          <p id="profileEmail" className="profile-email">{userEmail}</p>
        </div>

        <div className="profile-stats">
          <div className="profile-stat-card">
            <span className="profile-stat-number">{stats.orders}</span>
            <span className="profile-stat-label">Orders</span>
          </div>
          <div className="profile-stat-card">
            <span className="profile-stat-number">₹{stats.spent}</span>
            <span className="profile-stat-label">Spent</span>
          </div>
          <div className="profile-stat-card">
            <span className="profile-stat-number">⭐</span>
            <span className="profile-stat-label">Premium</span>
          </div>
        </div>

        <div className="profile-menu">
          {menuItems.map(item => (
            <div
              key={item.label}
              className="profile-menu-item"
              onClick={item.action || (() => alert(`${item.label}: Coming Soon!`))}
            >
              <span className="profile-menu-icon">{item.icon}</span>
              <span className="profile-menu-text">{item.label}</span>
              <span className="profile-menu-arrow">›</span>
            </div>
          ))}
          <div className="profile-menu-item logout-item" onClick={onLogout}>
            <span className="profile-menu-icon">🚪</span>
            <span className="profile-menu-text">Logout</span>
            <span className="profile-menu-arrow">›</span>
          </div>
        </div>
      </div>
    </section>
  )
}
