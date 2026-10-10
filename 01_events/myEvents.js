const EventEmitter = require('events')

const eventEmitter = new EventEmitter();

eventEmitter.on('greet',(username)=>{
    console.log(`hello ${username} and welcome to Node js`);
    
})

// Emit the event
eventEmitter.emit('greet', 'Soham');

eventEmitter.once('Goodbye',(username)=>{
    console.log(`Good Bye my Friend ${username}`);
    
})

eventEmitter.emit('Goodbye', 'Soham');
// this emit will only work once because we used once method

eventEmitter.emit('Goodbye', 'Svara');

const myListener = () => {console.log("this is the test listener");

}
eventEmitter.on('test',myListener)
eventEmitter.emit('test')
eventEmitter.removeListener('test',myListener)
eventEmitter.emit('test') // this will not work because we removed the listener

console.log(eventEmitter.listenerCount('greet')); // this will return the number of listeners for the event 'greet');
    