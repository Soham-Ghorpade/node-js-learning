const EeventEmitter = require('events');

class ChatRoom extends EeventEmitter{
    constructor(){
        super();
        this.users = new Set();
    }

    join(user){
        this.users.add(user);
        this.emit('join',user);
    }

    sendMessage(user,msg){
        if(this.users.has(user)){
            this.emit('message',user,msg);
            
        }
        else{
            console.log(`User ${user} is not in the chat room. Please join first.`);
        }
    }
    leave(user){
        if(this.users.has(user)){
            this.users.delete(user);
            this.emit('leave',user);
        }
        else{
            console.log(`user ${user} is not in the Chatroom.`);
            
        }
    }
}

module.exports = ChatRoom;