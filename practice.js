let http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello Zain');
}).listen(8000);




console.log("Hello Saim gandu")