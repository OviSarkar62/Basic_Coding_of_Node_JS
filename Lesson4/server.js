// HTTP req, res & status code
const http = require("http");

const port = 3000;
const hostName = '127.0.0.1';

const myServer = http.createServer((req, res) => {
    res.writeHead(202,{'Content-Type':'text/html'});
    res.write("<h1>Hello<h1>");
    res.end();
  });

myServer.listen(port, hostName, ()=>{
    console.log(`Server is running successfully at http://${hostName}:${port}`);
  });