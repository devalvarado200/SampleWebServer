const http = require("http");

const port = 443;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Sample Web Server, Port: 443");
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
