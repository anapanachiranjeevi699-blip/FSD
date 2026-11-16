import http from 'http';
const student=[];
const server=http.createServer((req,res)=>{
    const{method,url}=req;
    if (method=='POST' &&url=='/students'){
        let body=' ';
        req.on('data',(chunk)=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            const newStudent=Json.parse(body);
            students.Push(newStudent);
            res.writeHead(201,{'content_type','application/json'});
            res.end(Json.Stringify(newStudent));
        });
    }elseif(method=='GET'&&url=='students'){
        res.writeHead(200,{'content_type'},'application/js')
        res.end(Json.Stringify(students));
    };
})