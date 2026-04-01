// create a basic server using http method
const http = require("http");

// create a route file
// req --> send by user
// res --> send by server
const server = http.createServer((req,res)=>{
    res.end("Hello World !!")
});

server.listen(3000,()=>{
    console.log("go and Chack your browser on port 3000: http://localhost:3000/");
});

// check on browser  after run server.js file => localhost:3000


