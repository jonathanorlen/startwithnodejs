// Build using http
// const http = require('http');

// const server = http.createServer((req,res) => {
//      res.end('hello world');
// })
// server.listen(3000, () => {
//      console.log('listening on port 3000')
// })

const express = require('express')
const app = express()
const port = 2000

app.get('/user', (req, res) => res.send("Hello User"))

app.listen(port, () => console.log(`Example app listening at http://localhost/${port}`))