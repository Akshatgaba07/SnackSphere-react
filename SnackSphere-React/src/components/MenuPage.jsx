import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function MenuPage({ menuData, onBack }) {
  const { addToCart } = useCart()
  const [vegFilter, setVegFilter] = useState(false)
  const [nonvegFilter, setNonvegFilter] = useState(false)
  const [added, setAdded] = useState(null)

  function handleAdd(item) {
    addToCart(item.name, item.price)
    setAdded(item.name)
    setTimeout(() => setAdded(null), 1500)
  }

  function shouldShow(item) {
    if (vegFilter && !nonvegFilter) return item.type === 'veg'
    if (nonvegFilter && !vegFilter) return item.type === 'nonveg'
    return true
  }

  return (
    <section className="outlet-menu" style={{ display: 'block', padding: '20px' }}>
      <button onClick={onBack} className="back-btn">⬅ Back</button>
      <h2>{menuData.outletName} - Full Menu</h2>

      <div className="filter-toggle">
        <label className="switch veg">
          <span className="label-icon veg-icon"></span>
          <input
            type="checkbox"
            className="veg-toggle"
            checked={vegFilter}
            onChange={e => setVegFilter(e.target.checked)}
          />
          <span className="slider"></span>
        </label>
        <label className="switch nonveg">
          <span className="label-icon nonveg-icon"></span>
          <input
            type="checkbox"
            className="nonveg-toggle"
            checked={nonvegFilter}
            onChange={e => setNonvegFilter(e.target.checked)}
          />
          <span className="slider"></span>
        </label>
      </div>

      {added && (
        <div style={{
          position: 'fixed', bottom: '120px', left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
          color: 'white', padding: '12px 24px', borderRadius: '12px',
          zIndex: 2000, fontWeight: 600, fontSize: '14px'
        }}>
          ✅ Added to Cart!
        </div>
      )}

      <div className="menu-container">
        {menuData.sections.map((section, si) => {
          const visibleItems = section.items.filter(shouldShow)
          if (visibleItems.length === 0) return null
          return (
            <div key={si}>
              <h3 className="menu-title">{section.title}</h3>
              {visibleItems.map((item, ii) => (
                <div className={`menu-card ${item.type}`} data-category={item.category} key={ii}>
                  <div className="food-type"></div>
                  <h4>{item.name}</h4>
                  <p className="price">₹{item.price}</p>
                  <button onClick={() => handleAdd(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
