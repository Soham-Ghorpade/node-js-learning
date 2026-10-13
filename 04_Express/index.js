const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.end("hello world");
});

app.get('/contact-us',function(req,res){
    res.end("contact us at ramlal.pogo@email.com")
})

app.get('/tweet', (req,res)=>{
    res.end("Tweet-1 \n Tweet-2 \n Tweet-3")
});

app.post("/tweet", (req,res)=>{
    res.status(201).end("Tweet created successfully")
})

app.listen(8000, ()=>{console.log('server is running on port 8000');
})
