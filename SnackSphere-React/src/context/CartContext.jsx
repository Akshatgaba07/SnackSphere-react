import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('snackSphereCart')
    return saved ? JSON.parse(saved) : []
  })
  const [currentOutlet, setCurrentOutlet] = useState(
    () => localStorage.getItem('currentOutlet') || ''
  )

  useEffect(() => {
    localStorage.setItem('snackSphereCart', JSON.stringify(cart))
  }, [cart])

  function addToCart(name, price) {
    setCart(prev => {
      const existing = prev.find(i => i.name === name)
      if (existing) {
        return prev.map(i => i.name === name ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { name, price, quantity: 1 }]
    })
  }

  function removeFromCart(name) {
    setCart(prev => prev.filter(i => i.name !== name))
  }

  function updateQuantity(name, action) {
    setCart(prev => {
      return prev.reduce((acc, item) => {
        if (item.name !== name) return [...acc, item]
        if (action === 'increase') return [...acc, { ...item, quantity: item.quantity + 1 }]
        if (action === 'decrease' && item.quantity > 1) return [...acc, { ...item, quantity: item.quantity - 1 }]
        return acc // quantity 1 + decrease = remove
      }, [])
    })
  }

  function clearCart() {
    setCart([])
    localStorage.removeItem('snackSphereCart')
  }

  function openOutlet(outletName) {
    console.log('openOutlet called:', outletName)
    setCurrentOutlet(outletName)
    localStorage.setItem('currentOutlet', outletName)
    // Force verify it saved
    console.log('Saved to localStorage:', localStorage.getItem('currentOutlet'))
  }

  function closeOutlet() {
    setCurrentOutlet('')
    localStorage.removeItem('currentOutlet')
  }

  const totalItems = cart.reduce((s, i) => s + i.quantity, 0)
  const totalAmount = cart.reduce((s, i) => s + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      currentOutlet, openOutlet, closeOutlet,
      totalItems, totalAmount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
