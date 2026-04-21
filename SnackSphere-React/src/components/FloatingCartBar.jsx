import React from 'react'
import { useCart } from '../context/CartContext'

export default function FloatingCartBar({ onCartOpen }) {
    const { cart, totalAmount, totalItems } = useCart()

    if (cart.length === 0) return null  // hide when empty

    return (
        <div
            onClick={onCartOpen}
            style={{
                position: 'fixed',
                bottom: '70px',        // above bottom nav
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 32px)',
                maxWidth: '420px',
                background: 'linear-gradient(135deg, #E8191A, #ff6b6b)',
                color: 'white',
                borderRadius: '16px',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                zIndex: 999,
                boxShadow: '0 8px 24px rgba(232,25,26,0.4)',
                animation: 'slideUp 0.3s ease',
            }}
        >
            {/* Left — item count */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                    background: 'rgba(255,255,255,0.25)',
                    borderRadius: '10px',
                    padding: '4px 10px',
                    fontWeight: 700,
                    fontSize: '13px'
                }}>
                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </div>
                <span style={{ fontSize: '13px', opacity: 0.9 }}>
                    {cart.length > 1
                        ? `${cart[0].name} + ${cart.length - 1} more`
                        : cart[0].name
                    }
                </span>
            </div>

            {/* Right — total + arrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 700, fontSize: '15px' }}>₹{totalAmount}</span>
                <span style={{ fontSize: '18px' }}>→</span>
            </div>
        </div>
    )
}