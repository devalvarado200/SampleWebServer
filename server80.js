const http = require("http");
const ip = require("ip");

const ip_address = ip.address();
const port = 80;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Server running on IP: ${ip_address} and port: ${port}`);
})

server.listen(port, () => {});
