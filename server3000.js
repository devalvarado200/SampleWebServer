const http = require("http");
const ip = require("ip");

const ip_address = ip.address();
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Sample Web Server, Port: 3000");
})

server.listen(port, () => {
    console.log (`My IP is: ${ip_address}`);
    console.log(`Server running on port: ${port}`);
})
