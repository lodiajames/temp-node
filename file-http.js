const http = require('http');

const server = http.createServer((req, res)=>{

    if (req.url==='/'){
   res.end('Welcome to our home page')
    }
    if (req.url==='/about'){
   res.end('this is our history')
    }
    
   res.end("<h1>oops this is the end you can reach here</h1> <br/><a href='/'>Go back</a>")
    
  
})

server.listen(4000)