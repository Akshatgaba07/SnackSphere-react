import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminRoute({ children }) {
  const { isLoggedIn, userRole } = useAuth()
  if (!isLoggedIn) return <Navigate to="/login" replace />
  if (userRole !== 'admin') return <Navigate to="/" replace />
  return children
}
