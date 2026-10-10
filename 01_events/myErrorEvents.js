const { error } = require('console');
const EeventEmitter = require('events');

const eventEmitter = new EeventEmitter();

eventEmitter.on("error",(err)=>{
    console.error('there is an error:',err.message);
})

eventEmitter.emit(`error`,new Error("this is my error message"));
