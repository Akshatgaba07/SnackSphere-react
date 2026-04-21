import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartModal({ isOpen, onClose, onCheckout }) {
  const { cart, updateQuantity, removeFromCart, totalAmount, orderNote, setOrderNote } = useCart()  // 👈 added orderNote

  return (
    <>
      {/* Dark overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1000
          }}
        />
      )}

      {/* Sidebar drawer */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0,
        width: '380px', maxWidth: '100vw',
        height: '100vh', background: '#fff',
        zIndex: 1001, display: 'flex',
        flexDirection: 'column',
        boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #E8191A, #ff6b6b)',
          color: 'white'
        }}>
          <h2 style={{ margin: 0, fontSize: '20px' }}>🛒 Your Cart</h2>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none', borderRadius: '50%',
            width: '32px', height: '32px',
            color: 'white', fontSize: '18px',
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}>&times;</button>
        </div>

        {/* Items — scrollable */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {cart.length === 0 ? (
            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              height: '100%', color: '#999'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🛒</div>
              <p style={{ fontSize: '16px', fontWeight: 500 }}>Your cart is empty</p>
              <p style={{ fontSize: '13px', marginTop: '4px' }}>Add items to get started</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              {cart.map(item => (
                <div key={item.name} style={{
                  background: '#f9f9f9', borderRadius: '12px',
                  padding: '14px 16px', marginBottom: '12px',
                  border: '1px solid #eee'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px', color: '#1a1a1a' }}>{item.name}</div>
                      <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>₹{item.price} each</div>
                    </div>
                    <button onClick={() => removeFromCart(item.name)} style={{
                      background: 'none', border: 'none',
                      color: '#E8191A', fontSize: '12px',
                      fontWeight: 600, cursor: 'pointer'
                    }}>Remove</button>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <button onClick={() => updateQuantity(item.name, 'decrease')} style={{
                        width: '30px', height: '30px', borderRadius: '50%',
                        background: '#E8191A', color: 'white', border: 'none',
                        fontSize: '18px', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center'
                      }}>−</button>
                      <span style={{ fontWeight: 700, fontSize: '15px', minWidth: '16px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button onClick={() => updateQuantity(item.name, 'increase')} style={{
                        width: '30px', height: '30px', borderRadius: '50%',
                        background: '#E8191A', color: 'white', border: 'none',
                        fontSize: '18px', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center'
                      }}>+</button>
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '15px', color: '#E8191A' }}>
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}

              {/* 👇 Special Instructions Box */}
              <div style={{
                background: '#fff9f0',
                border: '1.5px dashed #ffb347',
                borderRadius: '12px',
                padding: '14px',
                marginTop: '4px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '16px' }}>📝</span>
                  <span style={{ fontWeight: 700, fontSize: '13px', color: '#1a1a1a' }}>
                    Special Instructions
                  </span>
                  <span style={{ fontSize: '11px', color: '#999', marginLeft: '2px' }}>
                    (optional)
                  </span>
                </div>
                <textarea
                  value={orderNote}
                  onChange={e => setOrderNote(e.target.value)}
                  placeholder="e.g. Less spicy, no onion, extra sauce..."
                  maxLength={150}
                  rows={2}
                  style={{
                    width: '100%',
                    border: '1.5px solid #ffe0b2',
                    borderRadius: '8px',
                    padding: '8px 10px',
                    fontSize: '13px',
                    resize: 'none',
                    outline: 'none',
                    fontFamily: 'inherit',
                    color: '#1a1a1a',
                    background: 'white',
                    boxSizing: 'border-box',
                    transition: 'border 0.2s'
                  }}
                  onFocus={e => e.target.style.border = '1.5px solid #E8191A'}
                  onBlur={e => e.target.style.border = '1.5px solid #ffe0b2'}
                />
                <div style={{ textAlign: 'right', fontSize: '11px', color: '#bbb', marginTop: '4px' }}>
                  {orderNote.length}/150
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{
            padding: '20px 24px',
            borderTop: '1px solid #eee',
            background: '#fff'
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              marginBottom: '16px', fontSize: '18px', fontWeight: 700
            }}>
              <span>Total</span>
              <span style={{ color: '#E8191A' }}>₹{totalAmount}</span>
            </div>
            <button onClick={onCheckout} style={{
              width: '100%', padding: '14px',
              background: 'linear-gradient(135deg, #E8191A, #ff6b6b)',
              color: 'white', border: 'none', borderRadius: '12px',
              fontSize: '16px', fontWeight: 700, cursor: 'pointer',
              letterSpacing: '0.3px'
            }}>
              Place Order 🚀
            </button>
          </div>
        )}
      </div>
    </>
  )
}