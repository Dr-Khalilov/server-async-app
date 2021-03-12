const http = require('http');
let reqCount = 0;
const requestListener=(req,res)=>{
    console.log(reqCount++);
    res.end(
        `Hello Sensei ${reqCount}`
    )
}

const server =http.createServer(requestListener)

server.listen(3000)