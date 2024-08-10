const http = require('http');
// console.log(http);
const server = http.createServer((req,res) => {
  res.write("Welcome to our Home page!");
  res.end();
})

server.listen(5000);


