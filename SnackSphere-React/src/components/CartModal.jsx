import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartModal({ isOpen, onClose, onCheckout }) {
  const { cart, updateQuantity, removeFromCart, totalAmount } = useCart()

  if (!isOpen) return null

  return (
    <div className="cart-modal show" style={{ display: 'flex' }}>
      <div className="cart-content">
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="close-cart" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-items" id="cartItems">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.name}>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{item.price}</div>
                </div>
                <div className="cart-item-quantity">
                  <button className="qty-btn" onClick={() => updateQuantity(item.name, 'decrease')}>−</button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQuantity(item.name, 'increase')}>+</button>
                </div>
                <div className="cart-item-total">₹{item.price * item.quantity}</div>
                <button className="remove-item-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span className="total-amount">₹{totalAmount}</span>
          </div>
          <button
            className="checkout-btn"
            onClick={onCheckout}
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
