const http = require('node:http');

const server = http.createServer(function(req,res){
    console.log(`Incoming Request at [${Date.now()}] `);
    
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(`
            <h1>Welcome to My Node Server!</h1>
            <p>This server is built using Node.js.</p>
            <a href="/about">About</a><br>
            <a href="/contact">Contact</a><br>
        `)
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(`
            <h1>About Us</h1>
            <p>This is the about page.</p>
            <a href="/">Home</a>
        `)
            break;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(`
            <h1>Contact Us</h1>
            <p>Contact us at ramlal@email.com</p>
            <a href="/">Home</a>
        `)
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' })
            return res.end('Page Not Found')
            
    }
            
    
    
})

server.listen(8000,function(){
    console.log('Server is running on port 8000');
})