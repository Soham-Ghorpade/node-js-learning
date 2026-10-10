const EeventEmitter = require('events');

class Chat extends EeventEmitter{
    sendMessage(msg){
        console.log(`Message sent ${msg}`);
        this.emit('message',msg);}
};

const chat = new Chat();
chat.on("message",function(msg){
    console.log(`New message: ${msg}`);
})

// Trigger the event
chat.sendMessage("Hello Soham");