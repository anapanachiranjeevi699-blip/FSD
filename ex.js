let http=require('http');
let fsm=require('fs');
let d=fsm.readFileSync('index.html','utf-8');
let g=fsm.readFileSync('index1.html','utf-8');
let c=fsm.readFileSync('index2.html','utf-8');

let server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.end(d);
    }else if(req.url==='/gallery' && req.method==='GET'){
        res.end(g);
    }else if(req.url==='/contact' && req.method==='GET'){
        res.end(c);
    }
});

server.listen(3000,()=>{
    console.log('Server started. Listening to port 3000 http://localhost:3000/');
});