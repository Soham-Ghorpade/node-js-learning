const http = require('node:http');

// creating a local server

const server = http.createServer((req, res)=>{
    console.log("I got an incomming Req");
    // Database operations can do here ---

    res.writeHead(200)
    res.end("thanks for visiting our server");

})

server.listen(8000,function(){
    console.log(`http server is up and running on port 8000`);
    
})