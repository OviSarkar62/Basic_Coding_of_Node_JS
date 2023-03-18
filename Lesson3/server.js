// HTTP Module-Create Server
const http = require("http");

const port = 3000;
const hostName = '127.0.0.1';

const myServer = http.createServer((req, res) => {
    res.end("This is my first running server");
  });

myServer.listen(port, hostName, ()=>{
    console.log(`Server is running successfully at http://${hostName}:${port}`);
  });