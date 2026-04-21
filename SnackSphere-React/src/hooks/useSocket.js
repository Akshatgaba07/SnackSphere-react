import { useEffect, useRef } from 'react'
import { io } from 'socket.io-client'

let socketInstance = null

export function getSocket() {
  if (!socketInstance) {
    socketInstance = io('https://snacksphere-backend.onrender.com')
  }
  return socketInstance
}

export function useSocket(userEmail) {
  const socket = getSocket()

  useEffect(() => {
    if (userEmail) {
      socket.emit('join', userEmail)
    }
  }, [userEmail])

  return socket
}
