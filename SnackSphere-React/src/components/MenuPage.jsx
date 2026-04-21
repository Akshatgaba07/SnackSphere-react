import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function MenuPage({ menuData, onBack, activeCategory }) {
  const { addToCart } = useCart()
  const [vegFilter, setVegFilter] = useState(false)
  const [nonvegFilter, setNonvegFilter] = useState(false)
  const [added, setAdded] = useState(null)
  const [sortOrder, setSortOrder] = useState('default')
  const [searchQuery, setSearchQuery] = useState('') // 👈 new

  function handleAdd(item) {
    if (navigator.vibrate) navigator.vibrate(50) // 👈 bas yeh
    addToCart(item.name, item.price)
    setAdded(item.name)
    setTimeout(() => setAdded(null), 1500)
  }

  function shouldShow(item) {
    if (vegFilter && !nonvegFilter && item.type !== 'veg') return false
    if (nonvegFilter && !vegFilter && item.type !== 'nonveg') return false
    if (activeCategory && activeCategory !== 'all') {
      if (item.category !== activeCategory) return false
    }
    // 👇 search filter
    if (searchQuery.trim()) {
      if (!item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    }
    return true
  }

  function sortItems(items) {
    if (sortOrder === 'low') return [...items].sort((a, b) => a.price - b.price)
    if (sortOrder === 'high') return [...items].sort((a, b) => b.price - a.price)
    return items
  }

  // total visible items count for "X results found"
  const totalVisible = menuData.sections.reduce((acc, section) => {
    return acc + section.items.filter(shouldShow).length
  }, 0)

  return (
    <section className="outlet-menu" style={{ display: 'block', padding: '20px' }}>
      <button onClick={onBack} className="back-btn">⬅ Back</button>
      <h2>{menuData.outletName} - Full Menu</h2>

      {activeCategory && activeCategory !== 'all' && (
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #E8191A, #ff6b6b)',
          color: 'white', padding: '6px 14px',
          borderRadius: '999px', fontSize: '13px',
          fontWeight: '700', marginBottom: '14px'
        }}>
          Showing: {activeCategory}
        </div>
      )}

      {/* 👇 Search Bar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        background: '#f5f5f5', borderRadius: '12px',
        padding: '10px 14px', marginBottom: '14px',
        border: '2px solid transparent',
        transition: 'border 0.2s',
      }}
        onFocus={e => e.currentTarget.style.border = '2px solid #E8191A'}
        onBlur={e => e.currentTarget.style.border = '2px solid transparent'}
      >
        <span style={{ fontSize: '18px', marginRight: '8px' }}>🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search in menu... (e.g. Maggi, Momos)"
          style={{
            flex: 1, border: 'none', background: 'transparent',
            fontSize: '14px', outline: 'none', color: '#1a1a1a'
          }}
        />
        {/* Clear button */}
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} style={{
            background: '#ddd', border: 'none',
            borderRadius: '50%', width: '22px', height: '22px',
            cursor: 'pointer', fontSize: '12px',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>✕</button>
        )}
      </div>

      {/* Results count — only show when searching */}
      {searchQuery.trim() && (
        <div style={{
          fontSize: '13px', color: '#666',
          marginBottom: '10px', fontWeight: '500'
        }}>
          {totalVisible === 0
            ? `❌ No items found for "${searchQuery}"`
            : `✅ ${totalVisible} item${totalVisible > 1 ? 's' : ''} found for "${searchQuery}"`
          }
        </div>
      )}

      {/* Filters + Sort Row */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', marginBottom: '12px'
      }}>
        <div className="filter-toggle">
          <label className="switch veg">
            <span className="label-icon veg-icon"></span>
            <input type="checkbox" className="veg-toggle"
              checked={vegFilter} onChange={e => setVegFilter(e.target.checked)} />
            <span className="slider"></span>
          </label>
          <label className="switch nonveg">
            <span className="label-icon nonveg-icon"></span>
            <input type="checkbox" className="nonveg-toggle"
              checked={nonvegFilter} onChange={e => setNonvegFilter(e.target.checked)} />
            <span className="slider"></span>
          </label>
        </div>

        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          style={{
            padding: '8px 12px', borderRadius: '20px',
            border: '2px solid #E8191A', color: '#E8191A',
            fontWeight: '600', fontSize: '13px',
            background: 'white', cursor: 'pointer', outline: 'none'
          }}
        >
          <option value="default">Sort: Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {added && (
        <div style={{
          position: 'fixed', bottom: '120px', left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
          color: 'white', padding: '12px 24px', borderRadius: '12px',
          zIndex: 2000, fontWeight: 600, fontSize: '14px'
        }}>
          ✅ Added to Cart!
        </div>
      )}

      {/* No results at all */}
      {totalVisible === 0 && (
        <div style={{
          textAlign: 'center', padding: '48px 20px', color: '#999'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🍽️</div>
          <p style={{ fontSize: '16px', fontWeight: 600 }}>No items found</p>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>
            Try a different search or clear filters
          </p>
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{
              marginTop: '16px', padding: '8px 20px',
              background: '#E8191A', color: 'white',
              border: 'none', borderRadius: '20px',
              fontWeight: 600, cursor: 'pointer'
            }}>
              Clear Search
            </button>
          )}
        </div>
      )}

      <div className="menu-container">
        {menuData.sections.map((section, si) => {
          const visibleItems = sortItems(section.items.filter(shouldShow))
          if (visibleItems.length === 0) return null
          return (
            <div key={si}>
              <h3 className="menu-title">{section.title}</h3>
              {visibleItems.map((item, ii) => (
                <div
                  className={`menu-card ${item.type}`}
                  data-category={item.category}
                  key={ii}
                >
                  <div className="food-type"></div>
                  <h4>
                    {/* 👇 highlight matched text */}
                    {searchQuery.trim()
                      ? highlightMatch(item.name, searchQuery)
                      : item.name
                    }
                  </h4>
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

// 👇 Highlights matched part of item name in red
function highlightMatch(text, query) {
  const index = text.toLowerCase().indexOf(query.toLowerCase())
  if (index === -1) return text
  return (
    <>
      {text.slice(0, index)}
      <span style={{ background: '#ffe0e0', color: '#E8191A', borderRadius: '3px', padding: '0 2px', fontWeight: 700 }}>
        {text.slice(index, index + query.length)}
      </span>
      {text.slice(index + query.length)}
    </>
  )
}