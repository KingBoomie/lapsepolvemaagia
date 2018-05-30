import openSocket from 'socket.io-client'
import Axios from 'axios'

console.log(process.env)
const backendURL =
  process.env.NODE_ENV === 'production'
    ? 'https://lit-hollows-38242.herokuapp.com'
    : 'http://localhost:5000'

const socket = openSocket(backendURL)

function subscribeToCounter(callback) {
  console.log('subscribing...')
  socket.on('connected', data => console.log(data))
  socket.on('load-count', counter => callback(null, counter.payload))
  socket.emit('subscribe-load-counter')
}

function request() {
  const instance = Axios.create({
    baseURL: backendURL,
  })
  return instance
}

export { subscribeToCounter, request }
