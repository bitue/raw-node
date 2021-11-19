const http =require('http');
const fs = require('fs');


const server = http.createServer((req, res)=> {

    if(req.url=='/'){
        fs.readFile('home.html','utf-8', (err , data)=> {
            if(err){
                res.end('error')
            }
            res.writeHead(200, {"content-type":"text/html"})
            res.write(data)
            res.end()
        })
       
    }
    else if(req.url =='/about'){
        fs.readFile('about.html','utf-8', (err , data)=> {
            if(err){
                res.end('error')
            }
            res.writeHead(200, {"content-type":"text/html"})
            res.write(data)
            res.end()
        })

    }
    else if(req.url =='/contact'){
        fs.readFile('contact.html','utf-8', (err , data)=> {
            if(err){
                res.end('error')
            }
            res.writeHead(200, {"content-type":"text/html"})
            res.write(data)
            res.end()
        })

    }

})


server.listen(5000, ()=> {
    console.log('server is running at ', 5000)
})