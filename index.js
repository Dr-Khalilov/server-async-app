const http = require('http')

const hostname = '127.0.0.1'
const port = 3000
let reqCount = 0

const server = http.createServer((req, res) => {
  res.statusCode = 200
  console.log(reqCount++)
  res.setHeader('Content-Type', 'text/plain')
  res.end(`Hello World ${reqCount}`)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
