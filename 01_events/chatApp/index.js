const ChatRoom = require("./chatRoom.js");
const chat = new ChatRoom();

chat.on('join',(user)=>{
    console.log(user+" has joined the chat room");
    
})
chat.on('message',(user,msg)=>{
    console.log(`${user}: ${msg}`);

})
chat.on('leave',(user)=>{
    console.log(user+" has left the chat room");
    
})

// simulating the chat room events
chat.join('Soham');
chat.join('Svara');
chat.sendMessage('Soham','Hello Everyone');
chat.sendMessage('Svara','Hi Soham');
chat.leave('Soham');