import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import LoginPage from './pages/LoginPage'
import MainApp from './pages/MainApp'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } />
            <Route path="/*" element={
              <ProtectedRoute>
                <MainApp />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}
