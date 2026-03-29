import { useEffect, useRef } from 'react'
import { io } from 'socket.io-client'

let socketInstance = null

export function getSocket() {
  if (!socketInstance) {
    socketInstance = io('http://localhost:5000')
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
