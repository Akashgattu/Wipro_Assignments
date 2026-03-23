const EventEmitter = require('events');

const event = new EventEmitter();

// Event listeners
event.on('userLoggedIn', (name) => {
  console.log(`User ${name} logged in.`);
});

event.on('userLoggedOut', (name) => {
  console.log(`User ${name} logged out.`);
});

event.on('sessionExpired', () => {
  console.log("Session expired!");
});

// Emit events
event.emit('userLoggedIn', 'John');
event.emit('userLoggedOut', 'John');

// Bonus: session expires after 5 seconds
setTimeout(() => {
  event.emit('sessionExpired');
}, 5000);