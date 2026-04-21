import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { outlets, foodCategories, foodCategoryMap } from '../data/outlets'
import { menuData } from '../data/menuData'
import MenuPage from '../components/MenuPage'

export default function ExplorePage({ onCartOpen }) {
  const { openOutlet, closeOutlet } = useCart()
  const [activeCategory, setActiveCategory] = useState('all')
  const [openMenu, setOpenMenu] = useState(null)
  const [search, setSearch] = useState('')
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem('snackSphereFavourites') || '[]')
  )
  const [outletStatuses, setOutletStatuses] = useState({}) // 👈 new

  const suggestions = ["Pasta", "Momos", "Soup", "Burger", "Pizza", "Noodles"]
  const [suggIdx, setSuggIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSuggIdx(i => (i + 1) % suggestions.length), 3000)
    return () => clearInterval(t)
  }, [])

  // 👇 fetch all outlet statuses on load
  useEffect(() => {
    outlets.forEach(async (outlet) => {
      try {
        const res = await fetch(`/api/outlets/status/${encodeURIComponent(outlet.name)}`)
        const data = await res.json()
        setOutletStatuses(prev => ({ ...prev, [outlet.name]: data.isOpen }))
      } catch {
        setOutletStatuses(prev => ({ ...prev, [outlet.name]: true })) // default open
      }
    })
  }, [])

  function toggleFav(name) {
    setFavourites(prev => {
      const next = prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
      localStorage.setItem('snackSphereFavourites', JSON.stringify(next))
      return next
    })
  }

  function openOutletMenu(outlet) {
    const isOpen = outletStatuses[outlet.name] !== false
    if (!isOpen) return  // 👈 blocked if closed
    openOutlet(outlet.name)
    setOpenMenu(outlet.menuId)
    window.scrollTo(0, 0)
  }

  function handleBack() {
    closeOutlet()
    setOpenMenu(null)
    window.scrollTo(0, 0)
  }

  const allowedByCategory = activeCategory === 'all'
    ? outlets.map(o => o.name)
    : (foodCategoryMap[activeCategory] || [])

  const visibleOutlets = outlets.filter(o => {
    const matchCat = allowedByCategory.some(n => n.toLowerCase() === o.name.toLowerCase())
    const matchSearch = !search ||
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.category.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  if (openMenu) {
    const data = menuData[openMenu]
    if (!data) return <div style={{ padding: 20 }}>Menu coming soon!</div>
    return <MenuPage menuData={data} onBack={handleBack} activeCategory={activeCategory} />
  }

  return (
    <>
      {/* Search */}
      <div className="search-bar" style={{ margin: '0 16px 8px' }}>
        <span className="material-icons search-icon">search</span>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={`Search for ${suggestions[suggIdx]}...`}
        />
      </div>

      {/* Food Categories */}
      <section className="food-categories">
        <div className="food-grid">
          {foodCategories.map(cat => (
            <div
              key={cat.key}
              className={`food-item ${activeCategory === cat.key ? 'active' : ''}`}
              data-category={cat.key}
              onClick={() => setActiveCategory(prev => prev === cat.key && cat.key !== 'all' ? 'all' : cat.key)}
            >
              <img src={cat.image} alt={cat.label} className="food-icon" />
              <span className="food-name">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Outlets Grid */}
      <section className="trending">
        <h3>Campus Outlets</h3>
        <div className="outlet-grid">
          {visibleOutlets.length === 0 && (
            <p style={{ textAlign: 'center', color: '#999', fontSize: '14px', padding: '20px', gridColumn: '1/-1' }}>
              No outlets available for this category
            </p>
          )}
          {visibleOutlets.map(outlet => {
            const isOpen = outletStatuses[outlet.name] !== false // 👈 default true
            return (
              <div
                key={outlet.name}
                className="outlet-box"
                onClick={() => openOutletMenu(outlet)}
                style={{
                  position: 'relative',
                  cursor: isOpen ? 'pointer' : 'not-allowed',
                  opacity: isOpen ? 1 : 0.75
                }}
              >
                <img src={outlet.image} alt={outlet.name} />

                {/* 👇 Closed overlay */}
                {!isOpen && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 2
                  }}>
                    <span style={{
                      background: '#f44336', color: 'white',
                      padding: '6px 16px', borderRadius: '20px',
                      fontWeight: 700, fontSize: '13px'
                    }}>🔴 Closed</span>
                  </div>
                )}

                <button
                  className="heart-btn"
                  style={{
                    position: 'absolute', top: '8px', right: '8px',
                    background: 'rgba(255,255,255,0.85)', border: 'none',
                    borderRadius: '50%', width: '32px', height: '32px',
                    fontSize: '16px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)', zIndex: 3,
                    opacity: favourites.includes(outlet.name) ? '1' : '0.6'
                  }}
                  onClick={e => { e.stopPropagation(); toggleFav(outlet.name) }}
                >
                  {favourites.includes(outlet.name) ? '❤️' : '🤍'}
                </button>

                <h4>{outlet.name}</h4>
                <p>⭐ {outlet.rating}</p>
                <span>{outlet.category}</span>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}