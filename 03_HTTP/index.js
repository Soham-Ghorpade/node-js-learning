const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer(function(req,res){
    const method = req.method;
    const path = req.url;

    const log = `[${Date.now()}]: ${method} ${path} \n`
    fs.appendFileSync("log.txt",log,"utf-8")

    console.log(`Incoming Request at [${log}] `);
   

    switch (method) {
        case 'GET':
            switch (path) {
                case '/':
                    return res.writeHead(200, { 'Content-Type': 'text/html' }).end(`
                    <h1>Welcome to My Node Server!</h1>
                    <p>This server is built using Node.js.</p>
                    <a href="/about">About</a><br>
                    <a href="/contact">Contact</a><br>
                `)

                case '/about':
                    return res.writeHead(200, { 'Content-Type': 'text/html' }).end(`
                    <h1>About Us</h1>
                    <p>This is the about page.</p>
                    <a href="/">Home</a>
                `)
                case '/contact':
                    return res.writeHead(200, { 'Content-Type': 'text/html' }).end(`
                    <h1>Contact Us</h1>
                    <p>Contact us at ramlal@email.com</p>
                    <a href="/">Home</a>
                `)
                case '/tweet':
                    return res.writeHead(200).end('Tweet-1 \n Tweet-2 \n Tweet-3');
               
            }
            break
        case 'POST':
            switch(path){
                case '/tweet':
                    res.writeHead(201).end('Tweet Created');
                    break;
            }
    }

    return res.writeHead(404).end('404 Not Found');
    
}) 

server.listen(8000,function(){
    console.log('Server is running on port 8000');
})