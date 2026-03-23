const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write("Hello from Node.js Server");
  } 
  else if (req.url === '/about') {
    res.write("About Page");
  } 
  else {
    res.write("404 Page Not Found");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});