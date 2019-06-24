const http = require('http')

const svr = http.createServer(handler)
svr.listen(8081)

function handler (req, res) {
  console.log('url:', req.url)

  res.writeHead(200, {'Content-Type': 'text/html'})
  
  res.end('<h1>Hello, World! Automatic Deployment And Build!!!!</h1>\n')
}
