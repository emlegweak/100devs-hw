const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 8000;

const server = http.createServer((req,res)=> {
    let filePath = path.join(__dirname, req.url == "/" ? "index.html" : req.url)
    let extName = path.extname(filePath)
    let contentType = "text/html"
    switch (extName) {
        case ".js":
            contentType = "text/javascript"
            break
        case ".css":
            contentType = "text/css"
            break
        case ".json":
            contentType = "application/json"
            break
        case ".png":
            contentType = "image/png"
            break
        case ".jpg":
            contentType = "image/jpg"
            break
    }
    
    if(req.url == '/api'){
        const coinFlip = Math.random()
        const message = (coinFlip < 0.5) ? 'Heads' : 'Tails'
        const status = {'status': message}
        res.writeHead(200, {'Content-Type': "application/json"})
        res.end(JSON.stringify(status))
    }else{
        fs.readFile(filePath, (err, content) => {
            console.log(err, content);
            if (err) {
                if (err.code == "ENOENT") {
                    fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
                        res.writeHead(200, { 'Content-Type': "text/html" });
                        res.end(content, "utf8");
                    })
                } else {
                    res.writeHead(500);
                    res.end(`Server error ${err}`);
                }
            } else {
                console.log(req.url);
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, "utf8");
            }
        });
    }

})

server.listen(PORT)