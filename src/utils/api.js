import openSocket from 'socket.io-client';
const socket = openSocket('https://lit-hollows-38242.herokuapp.com')

function subscribeToCounter(callback) {
    console.log("subscribing...");
    socket.on('connected', data => console.log(data))
    socket.on('load-count', counter => callback(null, counter))
    socket.emit('subscribe-load-counter')
}

export { subscribeToCounter };