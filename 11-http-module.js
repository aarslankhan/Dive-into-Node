const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my first node page')
    }
    if (req.url === '/about') {
        res.end('this is about page')
    }
    res.end()
})

server.listen(5000);