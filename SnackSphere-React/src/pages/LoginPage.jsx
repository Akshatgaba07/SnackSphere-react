import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { adminCredentials } from '../data/outlets'
import emailjs from '@emailjs/browser'

emailjs.init("Sm8Sijkj3QXNVbNHB")

export default function LoginPage() {
  const { isLoggedIn, userRole, loginUser, loginAdmin } = useAuth()
  const navigate = useNavigate()

  const [loginType, setLoginType] = useState('user')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [adminOutletSelect, setAdminOutletSelect] = useState('House of Chow')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [generatedOTP, setGeneratedOTP] = useState('')
  const [otpExpiry, setOtpExpiry] = useState(null)
  const [timer, setTimer] = useState('')
  const [btnText, setBtnText] = useState('Send OTP')
  const [btnDisabled, setBtnDisabled] = useState(false)

  useEffect(() => {
    if (isLoggedIn) {
      navigate(userRole === 'admin' ? '/admin' : '/')
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (!otpSent || !otpExpiry) return
    const interval = setInterval(() => {
      const left = Math.max(0, Math.floor((otpExpiry - Date.now()) / 1000))
      const m = Math.floor(left / 60)
      const s = left % 60
      setTimer(`OTP expires in ${m}:${s < 10 ? '0' : ''}${s}`)
      if (left === 0) {
        clearInterval(interval)
        setTimer('OTP expired. Please try again.')
        setGeneratedOTP('')
        setOtpSent(false)
        setBtnText('Send OTP')
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [otpSent, otpExpiry])

  async function handleSubmit(e) {
    e.preventDefault()

    if (loginType === 'admin') {
      const admin = adminCredentials.find(
        a => a.email === email && a.password === password && a.outlet === adminOutletSelect
      )
      if (admin) {
        loginAdmin(email, admin.outlet)
        navigate('/admin')
      } else {
        alert('❌ Invalid admin credentials!')
      }
      return
    }

    // User OTP flow
    if (!email.endsWith('@bennett.edu.in')) {
      alert('❌ Only @bennett.edu.in emails allowed!')
      return
    }

    if (!otpSent) {
      const code = Math.floor(100000 + Math.random() * 900000).toString()
      setGeneratedOTP(code)
      setOtpExpiry(Date.now() + 5 * 60 * 1000)
      setBtnText('Sending...')
      setBtnDisabled(true)
      try {
        await emailjs.send("service_bdfmuw8", "template_ttg02xr", {
          to_email: email,
          otp: code
        })
        setOtpSent(true)
        setBtnText('Verify OTP')
        setBtnDisabled(false)
        alert('✅ OTP sent to ' + email)
      } catch (err) {
        alert('❌ Failed to send OTP.')
        setBtnText('Send OTP')
        setBtnDisabled(false)
        setGeneratedOTP('')
      }
      return
    }

    if (Date.now() > otpExpiry) {
      alert('❌ OTP expired.')
      setOtpSent(false)
      setGeneratedOTP('')
      setBtnText('Send OTP')
      return
    }

    if (otp === generatedOTP) {
      loginUser(email)
      navigate('/')
    } else {
      alert('❌ Wrong OTP!')
    }
  }

  return (
    <div id="loginContainer" className="login-container" style={{ display: 'flex' }}>
      <div className="login-card">
        <div className="login-header">
          <h1>🍔 SnackSphere</h1>
          <p>Your Favorite Food, Anytime, Anywhere</p>
        </div>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label>Login As</label>
            <select
              value={loginType}
              onChange={e => { setLoginType(e.target.value); setOtpSent(false); setBtnText('Send OTP') }}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', marginBottom: '8px', background: 'white' }}
            >
              <option value="user">👤 User</option>
              <option value="admin">🏪 Admin (Outlet Owner)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder={loginType === 'admin' ? 'outlet@bennett.edu.in' : '****@bennett.edu.in'}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
          </div>

          {loginType === 'admin' && (
            <>
              <div className="form-group" id="adminOutletGroup">
                <label>Select Your Outlet</label>
                <select
                  value={adminOutletSelect}
                  onChange={e => setAdminOutletSelect(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', background: 'white' }}
                >
                  <option value="House of Chow">House of Chow</option>
                  <option value="Southern Stories">Southern Stories</option>
                  <option value="Maggi Hotspot (Nescafe)">Maggi Hotspot</option>
                  <option value="Calcutta Chef">Calcutta Chef</option>
                  <option value="Snap Eats">Snap Eats</option>
                  <option value="Infinity Kitchen">Infinity Kitchen</option>
                </select>
              </div>
              <div className="form-group" id="passwordGroup">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
            </>
          )}

          {loginType === 'user' && otpSent && (
            <div className="form-group" id="otpGroup">
              <label>Enter OTP</label>
              <input
                type="text"
                placeholder="6-digit OTP"
                maxLength="6"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                autoComplete="off"
              />
              <p style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>{timer}</p>
            </div>
          )}

          <button type="submit" className="login-btn" id="loginBtn" disabled={btnDisabled}>
            {loginType === 'admin' ? 'Login as Admin' : btnText}
          </button>
        </form>
      </div>
    </div>
  )
}
