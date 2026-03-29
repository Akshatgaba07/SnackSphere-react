import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userRole, setUserRole] = useState('')   // 'user' or 'admin'
  const [adminOutlet, setAdminOutlet] = useState('')

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    const email = localStorage.getItem('userEmail') || ''
    const role = localStorage.getItem('userRole') || ''
    const outlet = localStorage.getItem('adminOutlet') || ''
    setIsLoggedIn(loggedIn)
    setUserEmail(email)
    setUserRole(role)
    setAdminOutlet(outlet)
  }, [])

  function loginUser(email) {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userRole', 'user')
    localStorage.removeItem('adminOutlet')
    setIsLoggedIn(true)
    setUserEmail(email)
    setUserRole('user')
    setAdminOutlet('')
  }

  function loginAdmin(email, outlet) {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userRole', 'admin')
    localStorage.setItem('adminOutlet', outlet)
    setIsLoggedIn(true)
    setUserEmail(email)
    setUserRole('admin')
    setAdminOutlet(outlet)
  }

  function logout() {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
    localStorage.removeItem('adminOutlet')
    setIsLoggedIn(false)
    setUserEmail('')
    setUserRole('')
    setAdminOutlet('')
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn, userEmail, userRole, adminOutlet,
      loginUser, loginAdmin, logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
